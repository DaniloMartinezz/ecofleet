// src/components/DashboardGraph.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface CardDashboardGraphProps {
  title: string;
  text: string;
  data: number[];
}

const CardDashboardGraph: React.FC<CardDashboardGraphProps> = ({ title, text, data }) => {
  const chartData = {
    labels: Array(data.length).fill(''),
    datasets: [
      {
        data,
        borderColor: '#3A5B22',
        backgroundColor: '#3A5B221A',
        fill: true,
        tension: 0.4, // This makes the line curvy (wave-like)
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        radius: 0,
      },
    },
    maintainAspectRatio: false, // Ensures the chart can be resized
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-3 w-40 md:w-48 font-inter">
      <h2 className="text-sm md:text-base font-medium text-dark-400">{title}</h2>
      <div className="pt-2 text-xl md:text-2xl text-dark-200 font-semibold">{text}</div>
      <div style={{ height: '40px', width: '130px' }}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

const DashboardGraph: React.FC = () => {
  const cardsData = [
    { title: 'Recompensas / Mês', text: '64%', data: [10, 11, 12, 12, 11, 11, 13, 14] },
    { title: 'Melhorias Recentes', text: '5 / Mês', data: [10, 11, 12, 11, 12, 13, 13, 15] },
    { title: 'Nível do Perfil', text: '+85%', data: [10, 15, 14, 10, 9, 12, 11, 20] },
  ];

  return (
    <div className="flex flex-wrap justify-center space-x-4 md:flex-row md:space-x-6 md:space-y-0">
      {cardsData.slice(0, 2).map((card, index) => (
        <div key={index} className="flex justify-center mb-4 md:mb-0">
          <CardDashboardGraph title={card.title} text={card.text} data={card.data} />
        </div>
      ))}
      {cardsData.slice(2).map((card, index) => (
        <div key={index} className="hidden md:flex justify-center mb-4 md:mb-0">
          <CardDashboardGraph title={card.title} text={card.text} data={card.data} />
        </div>
      ))}
    </div>
  );
};

export default DashboardGraph;
