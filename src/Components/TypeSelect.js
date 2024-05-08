import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const TypeSelect =()=> {
    const [typeget, setType] = React.useState('line');
  
    const handleTypeChange = (event) => {
      setType(event.target.value);
    };
    return (
      <Box sx={{ minWidth: 120 }}>
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
    );
  }
  export default TypeSelect