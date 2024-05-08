import { TextField } from '@mui/material';
import React, { useState } from 'react'
const NameSelect = () =>{
    const [name, setName] = useState('Basic graph');

    const handleNameChange = (event) => {
      setName(event.target.value);
    };
    return <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={handleNameChange}/>
}
export default NameSelect