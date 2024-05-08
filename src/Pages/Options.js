import { Button, Container, TextField } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useState } from 'react';
import Chartadd from '../Components/Chartadd';
import GetOptions from '../Components/GetOptions';
function Options(){
    return <Container sx={{bgcolor:'grey', height:800, alignItems:'center'}}>
    <Chartadd />
    <Accordion>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header">
            {/* {name} */}GraphName
        </AccordionSummary>
        <AccordionDetails>
        <GetOptions/>
        </AccordionDetails>
      </Accordion>
    </Container>
}
export default Options