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


function BarChart() {
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

  const labels = ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'];
    
  const data = {
    labels,
    datasets: [
      {
        label: 'Africa',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 2500 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Europe',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 2500 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Africa',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 2500 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <Bar options={options} data={data} />
  )
}

export default BarChart