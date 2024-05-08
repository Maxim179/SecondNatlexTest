import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function ColorSelect() {
    const [color, setColor] = React.useState('blue');
  
    const handleColorChange = (event) => {
      setColor(event.target.value);
    };
    return (
      <Box sx={{ minWidth: 120 }}>
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
    );
  }
  export default ColorSelect