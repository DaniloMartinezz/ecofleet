import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const upgradesData = [
  { title: 'Melhoria #1', description: 'Descrição da melhoria #1', detailsLink: '#' },
  { title: 'Melhoria #2', description: 'Descrição da melhoria #2', detailsLink: '#' },
  { title: 'Melhoria #3', description: 'Descrição da melhoria #3', detailsLink: '#' },
];

const ProfileUpgrades: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`rounded-lg shadow w-full max-w-4xl mx-auto p-6 ${theme === 'dark' ? 'bg-dark-100 text-light-900' : 'bg-white text-dark-200'}`}>
      <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-light-200' : 'text-dark-100'}`}>Minhas Melhorias</h2>
      <p className={`text-sm mb-8 ${theme === 'dark' ? 'text-light-500' : 'text-dark-500'}`}>
        Aqui você pode encontrar sobre as melhorias realizadas em seu veículo, um resumo sobre a redução de CO2.
      </p>
      <div className="space-y-4">
        {upgradesData.map((upgrade, index) => (
          <div key={index} className={`rounded-lg p-4 shadow flex justify-between items-center ${theme === 'dark' ? 'bg-dark-200' : 'bg-light-Base'}`}>
            <div>
              <h3 className={`text-md font-bold ${theme === 'dark' ? 'text-light-200' : 'text-dark-100'}`}>{upgrade.title}</h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-light-500' : 'text-dark-500'}`}>{upgrade.description}</p>
              <a href={upgrade.detailsLink} className="text-sm text-green-green hover:underline">Ver Detalhes</a>
            </div>
            <button className="text-green-green">
              <FaEdit />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileUpgrades;
