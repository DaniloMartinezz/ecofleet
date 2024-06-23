// src/components/CardDashboard.tsx
import React from 'react';

interface CardProps {
  title: string;
  text: string;
}

const CardDashboard: React.FC = () => {
  const cardsData = [
    { title: 'Veículos Totais', text: '10' },
    { title: 'Próxima Manutenção', text: '20/06/2024' },
    { title: 'Usuários da Ecofleet', text: '2M' },
  ];

  const Card: React.FC<CardProps> = ({ title, text }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-3 w-48 font-inter">
        <h2 className="text-base font-medium text-dark-400">{title}</h2>
        <div className="py-8 text-2xl text-dark-200 font-semibold">{text}</div>
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
