import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '../../context/ThemeContext';

const data = [
  { name: '00', visitors: 200 },
  { name: '04', visitors: 100 },
  { name: '08', visitors: 300 },
  { name: '12', visitors: 150 },
  { name: '14', visitors: 250 },
  { name: '16', visitors: 300 },
  { name: '18', visitors: 100 },
];

const CardMonitoringDailyGraph: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`rounded-lg shadow p-6 md:w-[45vh] ${theme === 'dark' ? 'bg-dark-100 text-light-900' : 'bg-white text-dark-200'}`}>
      <div className="flex justify-between items-center">
        <div>
          <h2 className={`text-sm font-medium ${theme === 'dark' ? 'text-light-400' : 'text-gray-500'}`}>Visitantes Diário</h2>
          <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-light-200' : 'text-gray-900'}`}>2.579</h1>
        </div>
        <div className="text-green-600 font-medium text-sm">
          <span>&#9650; +2.45%</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={data}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: theme === 'dark' ? '#A0AEC0' : '#CBD5E0' }} />
          <Tooltip />
          <Bar dataKey="visitors" fill="#2B3674" barSize={10} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CardMonitoringDailyGraph;
