import React from 'react';
import { ListBulletIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

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
  const { theme } = useTheme();

  return (
    <div className={`shadow-md rounded-lg p-6 w-full mx-auto md:w-[92vh] ${theme === 'dark' ? 'bg-dark-100 text-light-900' : 'bg-white text-dark-200'}`}>
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h1 className={`text-xl font-semibold ${theme === 'dark' ? 'text-light-200' : 'text-dark-100'}`}>Progresso Mensal</h1>
          <div className="flex items-center justify-center">
            <ListBulletIcon className={`h-10 w-10 p-2 rounded-lg ${theme === 'dark' ? 'bg-dark-200 text-light-400' : 'bg-[#F4F7FE] text-green-500'}`} />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className={`py-2 px-4 border-b text-left text-sm font-medium ${theme === 'dark' ? 'text-light-400' : 'text-gray-500'}`}>Nome</th>
                <th className={`py-2 px-4 border-b text-left text-sm font-medium ${theme === 'dark' ? 'text-light-400' : 'text-gray-500'}`}>Status</th>
                <th className={`py-2 px-4 border-b text-left text-sm font-medium ${theme === 'dark' ? 'text-light-400' : 'text-gray-500'}`}>Progresso</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className={`py-2 px-4 border-b text-sm whitespace-nowrap ${theme === 'dark' ? 'text-light-300' : 'text-gray-700'}`}>{item.name}</td>
                  <td className={`py-2 px-4 border-b text-sm font-medium flex items-center`}>
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
