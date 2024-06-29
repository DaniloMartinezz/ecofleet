import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const rankingData = [
  { name: 'Empresa Automotiva', points: 52, accuracy: '97% Correta', rank: 1, change: 'up' },
  { name: 'Empresa Automotiva', points: 52, accuracy: '97% Correta', rank: 2, change: 'down' },
  { name: 'Empresa Automotiva', points: 52, accuracy: '97% Correta', rank: 3, change: 'up' },
  { name: 'Empresa Automotiva', points: 52, accuracy: '97% Correta', rank: 4, change: 'up' },
];

const CardEmpresarialRank: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`rounded-lg shadow-md p-6 w-full md:w-[60vh] ${theme === 'dark' ? 'bg-dark-100 text-light-900' : 'bg-white text-dark-200'}`}>
      <h2 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-light-400' : 'text-dark-400'}`}>Ranking Empresarial</h2>
      <div className="space-y-4">
        {rankingData.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div>
              <h3 className={`text-md font-bold ${theme === 'dark' ? 'text-light-300' : 'text-dark-300'}`}>{item.name}</h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-light-500' : 'text-dark-500'}`}>{item.points} Pontos / {item.accuracy}</p>
            </div>
            <div className="flex items-center">
              <p className={`text-lg font-bold mr-2 ${theme === 'dark' ? 'text-light-400' : 'text-dark-100'}`}>{item.rank}</p>
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
