// src/components/CardBarGraph.tsx
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CardBarGraph: React.FC = () => {
  const data = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    datasets: [
      {
        label: 'Atividade',
        data: [50, 100, 150, 200, 250, 300, 200, 300, 250, 350, 400, 450],
        backgroundColor: '#3A5B22', // Cor sólida das barras
        borderRadius: 4, // Bordas arredondadas
        barThickness: 12, // Espessura das barras
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
        align: 'start' as 'start', // Ajuste aqui para evitar o erro de tipagem
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
    <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-[55vh] mr-5 mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Atividade</h2>
        <div className=" text-green-green cursor-pointer">Mês</div>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CardBarGraph;
