import React from 'react';
import { FaCalendarAlt, FaDollarSign, FaRoad, FaCheckCircle } from 'react-icons/fa';

const cardData = [
  { icon: <FaCalendarAlt className="text-green-green" />, label: 'Próxima Manutenção', value: '20/06/2024' },
  { icon: <FaDollarSign className="text-green-green" />, label: 'Gasto Mensal', value: 'R$250,00' },
  { icon: <FaRoad className="text-green-green" />, label: 'Média por Km', value: '15 KM/L' },
  { icon: <FaCheckCircle className="text-green-green" />, label: 'Manutenções Concluídas', value: '14' }
];

const CardDatasMaintenance: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-between items-center font-inter   space-y-4 md:space-y-0 md:space-x-4">
      {cardData.map((item, index) => (
        <div key={index} className="flex items-center bg-light-Base p-4 rounded-lg shadow w-full md:w-auto">
          <div className=" bg-[#3A5B2240] rounded-full p-4 mr-4">
            {item.icon}
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-medium text-dark-400">{item.label}</p>
            <p className="text-lg font-bold text-dark-200  font-poppins">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDatasMaintenance;
