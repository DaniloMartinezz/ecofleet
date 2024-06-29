import React from 'react';
import { FaCalendarAlt, FaDollarSign, FaRoad, FaCheckCircle } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const cardData = [
  { icon: <FaCalendarAlt className="text-green-green" />, label: 'Próxima Manutenção', value: '20/06/2024' },
  { icon: <FaDollarSign className="text-green-green" />, label: 'Gasto Mensal', value: 'R$250,00' },
  { icon: <FaRoad className="text-green-green" />, label: 'Média por Km', value: '15 KM/L' },
  { icon: <FaCheckCircle className="text-green-green" />, label: 'Manutenções Concluídas', value: '14' }
];

const CardDatasMaintenance: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-wrap justify-between items-center font-inter md:justify-around space-y-4 md:space-y-2 md:space-x-0">
      {cardData.map((item, index) => (
        <div key={index} className={`flex items-center p-4 md:px-8 rounded-lg shadow w-full md:w-auto ${theme === 'dark' ? 'bg-dark-200' : 'bg-light-Base'}`}>
          <div className={`rounded-full p-4 mr-4 ${theme === 'dark' ? 'bg-dark-300' : 'bg-[#3A5B2240]'}`}>
            {item.icon}
          </div>
          <div className="flex flex-col">
            <p className={`text-sm font-medium ${theme === 'dark' ? 'text-light-400' : 'text-dark-400'}`}>{item.label}</p>
            <p className={`text-lg font-bold font-poppins ${theme === 'dark' ? 'text-light-200' : 'text-dark-200'}`}>{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDatasMaintenance;
