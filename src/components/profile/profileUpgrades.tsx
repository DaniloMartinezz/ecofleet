import React from 'react';
import { FaEdit } from 'react-icons/fa';

const upgradesData = [
  { title: 'Melhoria #1', description: 'Descrição da melhoria #1', detailsLink: '#' },
  { title: 'Melhoria #2', description: 'Descrição da melhoria #2', detailsLink: '#' },
  { title: 'Melhoria #3', description: 'Descrição da melhoria #3', detailsLink: '#' },
];

const ProfileUpgrades: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow w-full max-w-4xl mx-auto p-6">
      <h2 className="text-xl font-bold text-dark-100 mb-4">Minhas Melhorias</h2>
      <p className="text-sm text-dark-500 mb-8">
        Aqui você pode encontrar sobre as melhorias realizadas em seu veículo, um resumo sobre a redução de CO2.
      </p>
      <div className="space-y-4">
        {upgradesData.map((upgrade, index) => (
          <div key={index} className="bg-light-Base rounded-lg p-4 shadow flex justify-between items-center">
            <div>
              <h3 className="text-md font-bold text-dark-100">{upgrade.title}</h3>
              <p className="text-sm text-dark-500">{upgrade.description}</p>
              <a href={upgrade.detailsLink} className="text-sm text-green-green hover:underline">Ver Detalhes</a>
            </div>
            <button className="text-green-green ">
              <FaEdit />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileUpgrades;
