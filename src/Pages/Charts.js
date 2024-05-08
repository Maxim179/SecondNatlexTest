import React from 'react';
import ChartOptions from '../Components/ChartOptions';
import ChartPlot from '../Components/ChartPlot';
import { Button, Container } from '@mui/material';
import ChartAdd from '../Components/Chartadd';
function Charts(){
    return (
    <Container sx={{bgcolor:'grey', height:800, alignItems:'center'}}>
        {ChartPlot('spline','Graphic')}
    </Container>
    );
}
export default Charts