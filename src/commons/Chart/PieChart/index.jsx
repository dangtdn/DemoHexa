import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

function PieChart(props) {
  ChartJS.register(ArcElement, Tooltip, Legend);

  return (
    <div>
    <Pie
      data={{
        labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
        datasets: [
          {
            label: '# of votes',
            data: [5200, 2400, 730, 780, 430],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ]
          }
        ],
      }}
    />
  </div>
  )
}

export default PieChart