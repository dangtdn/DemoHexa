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

function HorizontalbarChart() {
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
    data={{
      labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
      datasets: [
        {
          label: 'Population (millions)',
          data: [2500, 5400, 800, 900, 400, 6000],
          backgroundColor: [
            'rgba(107, 187, 151)',
            'rgba(150, 217, 133)',
            'rgba(245, 220, 110)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 156, 117)',
            'rgba(237, 89, 109)',
          ]
        },
      ],
    }}
    options={{
      indexAxis: 'y',
    }}
    />
  )
}

export default HorizontalbarChart