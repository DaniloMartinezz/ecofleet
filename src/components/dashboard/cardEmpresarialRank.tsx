import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const rankingData = [
  { name: 'Empresa Automotiva', points: 52, accuracy: '97% Correta', rank: 1, change: 'up' },
  { name: 'Empresa Automotiva', points: 52, accuracy: '97% Correta', rank: 2, change: 'down' },
  { name: 'Empresa Automotiva', points: 52, accuracy: '97% Correta', rank: 3, change: 'up' },
  { name: 'Empresa Automotiva', points: 52, accuracy: '97% Correta', rank: 4, change: 'up' },
];

const CardEmpresarialRank: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full  md:w-[60vh] ">
      <h2 className="text-lg font-bold text-dark-100 mb-4">Ranking Empresarial</h2>
      <div className="space-y-4">
        {rankingData.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div>
              <h3 className="text-md font-bold text-dark-300">{item.name}</h3>
              <p className="text-sm text-dark-500">{item.points} Pontos / {item.accuracy}</p>
            </div>
            <div className="flex items-center">
              <p className="text-lg font-bold text-dark-100 mr-2">{item.rank}</p>
              {item.change === 'up' ? (
                <FaArrowUp className="text-green-green" />
              ) : (
                <FaArrowDown className="text-red-500" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardEmpresarialRank;
