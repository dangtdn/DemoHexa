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
import faker from 'faker';


function BarLineChart() {
  ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const labels = ['Europe', 'Africa', 'Europe', 'Africa'];
    
  const data = {
    labels,
    datasets: [
      {
        type: 'line',
        label: 'Europe',
        data: [400, 500, 700, 800],
        backgroundColor: 'rgba(238, 197, 202)',
      },
      {
        label: 'Africa',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 2500 })),
        backgroundColor: 'rgba(229, 229, 229)',
      },
      {
        label: 'Europe',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 2500 })),
        backgroundColor: 'rgba(110, 116, 159)',
      },
      {
        label: 'Africa',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 2500 })),
        backgroundColor: 'rgba(90, 161, 241)',
      },
    ],
  };

  return (
    <Bar options={options} data={data} />
  )
}

export default BarLineChart