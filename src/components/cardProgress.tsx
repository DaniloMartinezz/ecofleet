import React from 'react';
import { ListBulletIcon } from '@heroicons/react/24/outline';

interface ProgressBarProps {
  progress: number;
  bgColor: string;
}

const data = [
  { name: 'Troca de Pneus', status: 'Realizado', progress: 100, statusColor: 'text-green-500', bgColor: 'bg-green-500' },
  { name: 'Melhoria Escapamento', status: 'Atraso', progress: 0, statusColor: 'text-red-500', bgColor: 'bg-red-500' },
  { name: 'Novas Rotas', status: 'Andamento', progress: 50, statusColor: 'text-yellow-500', bgColor: 'bg-yellow-500' },
  { name: 'Combustível Sustentável', status: 'Realizado', progress: 100, statusColor: 'text-green-500', bgColor: 'bg-green-500' },
];

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, bgColor }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className={`h-2.5 rounded-full ${bgColor}`} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

const CardProgress: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full  mx-auto md:w-[92vh]">
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl text-[#2B3674] font-semibold">Progresso Mensal</h1>
          <div className="flex items-center justify-center">
            <ListBulletIcon className="h-10 w-10 bg-[#F4F7FE] p-2 text-green-500 rounded-lg" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Nome</th>
                <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Status</th>
                <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Progresso</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b text-sm text-gray-700 whitespace-nowrap">{item.name}</td>
                  <td className="py-2 px-4 border-b text-sm font-medium flex items-center">
                    <span className={`mr-2 ${item.statusColor}`}>●</span>
                    {item.status}
                  </td>
                  <td className="py-2 px-4 border-b text-sm">
                    <ProgressBar progress={item.progress} bgColor={item.bgColor} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CardProgress;
