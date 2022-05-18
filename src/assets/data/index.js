import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import faker from 'faker';


//   ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
// );

export const dataChart = [
      {
        title: "Mixed: Bar - Line",
        options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
            },
        },
        labels: ['1900', '1950', '1999', '2050'],
        data: {
            labels: null,
            datasets: [
              {
                label: 'Africa',
                data: dataChart[0].labels.map(() => faker.datatype.number({ min: 0, max: 2500 })),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
              {
                label: 'Europe',
                data: dataChart[0].labels.map(() => faker.datatype.number({ min: 0, max: 2500 })),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              },
              {
                label: 'Africa',
                data: dataChart[0].labels.map(() => faker.datatype.number({ min: 0, max: 2500 })),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              },
            ],
        },
      },
      {
        title: "Bar",
        options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
            },
        },
        labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
        data: {
            labels: null,
            datasets: [
              {
                label: 'Population',
                data: dataChart[0].labels.map(() => faker.datatype.number({ min: 0, max: 6000 })),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
            ],
        },
      },
      {
        title: "Doughnut",
        options: null,
        labels: null,
        data: {
            labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
            datasets: [
              {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
              },
            ],
        },
      },
      {
        title: "Polar Area",
        options: null,
        labels: null,
        data: {
            labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
            datasets: [
              {
                label: '# of Votes',
                data: [12],
                backgroundColor: [
                  'rgba(110, 116, 159)',
                ],
              },
            ],
        },
      },
      {
        title: "Line",
        options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
            },
        },
        labels: ['1500', '1600', '1700', '1750', '1800', '1900', '1950', '1999', '2050'],
        data: {
            labels: null,
            datasets: [
                {
                  label: 'Africa',
                  data: dataChart[0].labels.map(() => faker.datatype.number({ min: 0, max: 6000 })),
                  borderColor: 'rgb(255, 99, 132)',
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
                {
                  label: 'Asia',
                  data: [0, 0, 0, 0, 0, 0, 1000, 1000, 2000, 4000],
                  borderColor: 'rgb(53, 162, 235)',
                  backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
                {
                  label: 'Europe',
                  data: [0, 0, 0, 0, 0, 0, 1000, 1000, 2000, 4000],
                  borderColor: 'rgb(53, 162, 235)',
                  backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
                {
                  label: 'Latin America',
                  data: [0, 0, 0, 0, 0, 0, 1000, 1000, 2000, 3000],
                  borderColor: 'rgb(53, 162, 235)',
                  backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
                {
                  label: 'North America',
                  data: [0, 0, 0, 0, 0, 0, 1000, 1000, 1500, 3000],
                  borderColor: 'rgb(53, 162, 235)',
                  backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
            ],
        },
      },
]
