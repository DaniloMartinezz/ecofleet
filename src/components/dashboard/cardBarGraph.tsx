import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useTheme } from '../../context/ThemeContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CardBarGraph: React.FC = () => {
  const { theme } = useTheme();

  const data = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    datasets: [
      {
        label: 'Atividade',
        data: [50, 100, 150, 200, 250, 300, 200, 300, 250, 350, 400, 450],
        backgroundColor: '#3A5B22', 
        borderRadius: 4, 
        barThickness: 12, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Atividade Recente',
        align: 'start' as 'start', 
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
        ticks: {
          stepSize: 100,
        },
      },
    },
  };

  return (
    <div className={`shadow-md rounded-lg p-4 w-full md:w-[55vh] mr-5 mx-auto ${theme === 'dark' ? 'bg-dark-100 text-light-900' : 'bg-white text-dark-200'}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className={`text-xl font-semibold ${theme === 'dark' ? 'text-light-200' : 'text-dark-400'}`}>Atividade</h2>
        <div className="text-green-green cursor-pointer">Mês</div>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CardBarGraph;
