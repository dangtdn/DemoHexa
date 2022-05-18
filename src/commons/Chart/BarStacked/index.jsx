import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

function BarStacked(props) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

  return (
    <Bar 
    options={{
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    }} 
    data={{
      labels: ['1900', 'Asi1950a', '1999', '2050'],
      datasets: [
        {
          label: 'Africa',
          data: [200, 300, 800, 2500, 3500],
          backgroundColor: [
            'rgba(255, 54, 51)'
          ]
        },
        {
          label: 'Europe',
          data: [500, 700, 1500, 3000, 3500],
          backgroundColor: [
            'rgba(89, 196, 249)'
          ]
        },
      ],
    }}
    />
  )
}

export default BarStacked