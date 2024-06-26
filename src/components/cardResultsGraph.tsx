import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Economia', value: 63, color: '#3A5B22' },
  { name: 'Redução CO2', value: 25, color: '#D3D3D3' },
  { name: 'Outros', value: 12, color: '#F0F0F0' }
];

const CardResultsGraph: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-900">Resultados da Ecofleet</h2>
        <select className="text-sm font-medium text-gray-600 border-none outline-none">
          <option>Mensal</option>
          <option>Semanal</option>
          <option>Diário</option>
        </select>
      </div>
      <div className="flex justify-center items-center mb-4">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={50}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-around items-center bg-gray-50 rounded-lg p-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <span className="inline-block w-2 h-2 rounded-full bg-green-700 mr-2"></span>
            <span className="text-sm font-medium text-gray-600">Economia</span>
          </div>
          <span className="text-xl font-bold text-gray-900">63%</span>
        </div>
        <div className="w-px h-12 bg-gray-300"></div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <span className="inline-block w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
            <span className="text-sm font-medium text-gray-600">Redução CO2</span>
          </div>
          <span className="text-xl font-bold text-gray-900">25%</span>
        </div>
      </div>
    </div>
  );
};

export default CardResultsGraph;
