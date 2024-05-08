import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import React from 'react';

function ChartPlot(typeget,name){
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
   return <HighchartsReact highcharts={Highcharts} options={ChartOptions} />;
}
export default ChartPlot