import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

const data = {
  labels: ['SET', 'OUT', 'NOV', 'DEZ', 'JAN', 'FEV'],
  datasets: [
    {
      label: 'Gasto total',
      data: [300, 400, 500, 400, 350, 375],
      borderColor: '#3b82f6',
      backgroundColor: '#3b82f6',
      fill: false,
      tension: 0.4,
    },
    {
      label: 'Monitoramento',
      data: [200, 250, 300, 275, 225, 250],
      borderColor: '#10b981',
      backgroundColor: '#10b981',
      fill: false,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      display: true,
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
};

const CardTotalCostGraph: React.FC = () => {
  return (
    <div className="bg-light shadow-md rounded-lg p-4 w-full ">
      <div className="flex flex-col md:flex-row py-5 justify-between ">
        <div className="flex-1 md:pr-6">
          <div className="text-xs text-gray-400 uppercase">Esse mês</div>
          <div className="text-4xl font-bold text-gray-800">R$375,00</div>
          <div className="text-sm text-gray-500">Gasto total</div>
          <div className="text-green-500 font-semibold mt-1">+2.45%</div>
          <div className="mt-6 flex items-center justify-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <div className="text-sm text-green-500 font-medium">Monitoramento</div>
          </div>
        </div>
        <div className="w-full h-48  mt-4 md:w-[65vh]">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default CardTotalCostGraph;
