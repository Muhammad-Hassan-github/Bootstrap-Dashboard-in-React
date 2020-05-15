Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@tanzeelsaab 
jerairrest
/
react-chartjs-2
34.9k
37
2.8k498
 Code
 Issues 70
 Pull requests 15 Actions
 Projects 2
 Wiki
 Security 0
 Insights
react-chartjs-2/example/src/components/mix.js /
@jerairrest jerairrest Rc 2.1.0 (#130)
459504b on May 8, 2017
@gor181@jerairrest
104 lines (99 sloc)  1.99 KB
 
Code navigation is available!
Navigate your code with ease. Click on function and method calls to jump to their definitions or references in the same repository. Learn more

import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
      label: 'Sales',
      type:'line',
      data: [51, 65, 40, 49, 60, 37, 40],
      fill: false,
      borderColor: '#EC932F',
      backgroundColor: '#EC932F',
      pointBorderColor: '#EC932F',
      pointBackgroundColor: '#EC932F',
      pointHoverBackgroundColor: '#EC932F',
      pointHoverBorderColor: '#EC932F',
      yAxisID: 'y-axis-2'
    },{
      type: 'bar',
      label: 'Visitor',
      data: [200, 185, 590, 621, 250, 400, 95],
      fill: false,
      backgroundColor: '#71B37C',
      borderColor: '#71B37C',
      hoverBackgroundColor: '#71B37C',
      hoverBorderColor: '#71B37C',
      yAxisID: 'y-axis-1'
    }]
};

const options = {
  responsive: true,
  tooltips: {
    mode: 'label'
  },
  elements: {
    line: {
      fill: false
    }
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false
        },
        labels: {
          show: true
        }
      }
    ],
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
        gridLines: {
          display: false
        },
        labels: {
          show: true
        }
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          display: false
        },
        labels: {
          show: true
        }
      }
    ]
  }
};

const plugins = [{
    afterDraw: (chartInstance, easing) => {
        const ctx = chartInstance.chart.ctx;
        ctx.fillText("This text drawn by a plugin", 100, 100);
    }
}];

export default React.createClass({
  displayName: 'MixExample',

  render() {
    return (
      <div>
        <h2>Mixed data Example</h2>
        <Bar
          data={data}
          options={options}
          plugins={plugins}
        />
      </div>
    );
  }
});

