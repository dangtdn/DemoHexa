import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

function LineChart(props) {
  ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
  );

  return (
    <Line  
    data={{
      labels: ['1500', '1600', '1700', '1750', '1800', '1850', '1900', '1950', '1999', '2050'],
      datasets: [
        {
          label: 'Africa',
          data: [0, 300, 500, 600, 700, 800, 1200, 1500, 4000, 5000, 6000],
          backgroundColor: [
            'rgba(107, 187, 151)'
          ],
          borderColor: 'rgba(107, 187, 151)'
        },
        {
          label: 'Asia',
          data: [0, 300, 800, 600, 800, 900, 1400, 1200, 4000, 5000, 1000],
          backgroundColor: [
            'rgba(150, 217, 133)'
          ],
          borderColor: 'rgba(150, 217, 133)'
        },
        {
          label: 'Europe',
          data: [0, 300, 500, 700, 500, 800, 1000, 1300, 1600, 1800, 2000],
          backgroundColor: [
            'rgba(245, 220, 110)',
          ],
          borderColor: 'rgba(245, 220, 110)'
        },
        {
          label: 'Latin America',
          data: [0, 300, 400, 500, 700, 900, 1300, 1400, 1000, 1700, 900],
          backgroundColor: [
            'rgba(255, 156, 117)'
          ],
          borderColor: 'rgba(255, 156, 117)'
        },
        {
          label: 'North America',
          data: [0, 200, 500, 100, 700, 750, 900, 1100, 1200, 1600, 950],
          backgroundColor: [
            'rgba(237, 89, 109)'
          ],
          borderColor: 'rgba(237, 89, 109)'
        },
      ],
    }}
    />
  )
}

export default LineChart