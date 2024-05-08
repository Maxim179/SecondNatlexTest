import React, { useState } from 'react'
import { Button, Container, Modal } from '@mui/material'
import ChartPlot from './ChartPlot'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
function GetOptions(){
  const ModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  function ChartAdd() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <Container>
        <Button size='large' variant='contained' onClick={handleOpen}>Add new chart</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={ModalStyle}>
            <Button size='medium' variant='contained'>Add new chart</Button>
            <Button size='medium' variant='contained'>Change chart</Button>
          </Box>
        </Modal>
      </Container>
    );
  }
  const [typeget, setType] = React.useState('line');
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const [name, setName] = React.useState('Basic graph');
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const [color, setColor] = React.useState('blue');
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  const [charts, setCharts] = useState([])
  const ChartOptions = {
    id:charts.length,
     chart: {
       type: typeget
     },
     title: {
       text: name
     },
     xAxis: {
       categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
 },
     yAxis: {
         title: {
             text: 'Temperature (°C)'
         }
     },
     series: [
       {
         data: [1, 2, 1, 4, 3, 6, 7,10,25,84,11,17]
       }
     ]
   };
  function ChartMassiveAdd(){
    setCharts([...charts, ChartOptions]);
  }
  function ChartPlot(typeget,name){
    return <HighchartsReact highcharts={Highcharts} options={ChartOptions} />;
 }
    return(
    <div>
    <Container>
      <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={handleNameChange} sx={{padding:0.5}}/>
      <Box sx={{ minWidth: 120, padding:0.5 }}>
        <FormControl fullWidth>
          <InputLabel id="chart-type-labe">Type</InputLabel>
          <Select
            labelId="chart-type-label"
            id="chart-type-select"
            value={typeget}
            label="Type"
            onChange={handleTypeChange}>
            <MenuItem value={'spline'}>Spline</MenuItem>
            <MenuItem value={'line'}>Line</MenuItem>
            <MenuItem value={'area'}>Area</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120, padding:0.5}}>
      <FormControl fullWidth>
        <InputLabel id="chart-color-select-label">Colour</InputLabel>
        <Select
          labelId="chart-color-select-label"
          id="chart-color-select"
          value={color}
          label="Color"
          onChange={handleColorChange}>
          <MenuItem value={'red'}>Red</MenuItem>
          <MenuItem value={'blue'}>Blue</MenuItem>
          <MenuItem value={'green'}>Green</MenuItem>
        </Select>
      </FormControl>
    </Box>
        <Button variant='contained' onClick={ChartMassiveAdd} sx={{padding:0.5}}>Save</Button>
        {ChartPlot(typeget,name)}
        {charts.map((chartOptions, index) => (
        <ChartPlot key={chartOptions.id} options={chartOptions} />
      ))}
    </Container>
    </div>
    );
}
export default GetOptions