import React from 'react'
import HighchartsReact from "highcharts-react-official";
import Highcharts, { color } from 'highcharts'
import ColorSelect from './ColorSelect';
import TypeSelect from './TypeSelect';
import GetOptions from './GetOptions';
let typeget = 'spline';
let name = 'Graph';
let colour = 'red';
const ChartOptions = {
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
  export default ChartOptions