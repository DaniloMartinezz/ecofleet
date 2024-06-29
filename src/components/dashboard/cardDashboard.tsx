import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface CardProps {
  title: string;
  text: string;
}

const CardDashboard: React.FC = () => {
  const { theme } = useTheme();
  
  const cardsData = [
    { title: 'Veículos Totais', text: '10' },
    { title: 'Próxima Manutenção', text: '20/06/2024' },
    { title: 'Usuários da Ecofleet', text: '2M' },
  ];

  const Card: React.FC<CardProps> = ({ title, text }) => {
    return (
      <div className={`shadow-md rounded-lg p-3 w-48 font-inter ${theme === 'dark' ? 'bg-dark-100 text-light-900' : 'bg-white text-dark-200'}`}>
        <h2 className={`text-base font-medium ${theme === 'dark' ? 'text-light-400' : 'text-dark-400'}`}>{title}</h2>
        <div className={`py-8 text-2xl font-semibold ${theme === 'dark' ? 'text-light-200' : 'text-dark-200'}`}>{text}</div>
      </div>
    );
  };

  return (
    <div className="flex space-x-6 justify-center items-center">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} text={card.text} />
      ))}
    </div>
  );
};

export default CardDashboard;
