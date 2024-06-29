import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const VehicleData: React.FC = () => {
  const { theme } = useTheme();
  const [clicked, setClicked] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClicked(clicked === index ? null : index);
  };

  return (
    <div className={`rounded-lg shadow p-6 w-full md:w-[60vh] mx-auto ${theme === 'dark' ? 'bg-dark-100 text-light-900' : 'bg-light-Base text-dark-200'}`}>
      <h2 className={`text-lg font-medium mb-4 ${theme === 'dark' ? 'text-light-400' : 'text-dark-50'}`}>Visão Geral do Veículo</h2>
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {[
          { label: 'Modelo', value: 'Toyota Corolla' },
          { label: 'Placa', value: 'ABC - 1234' },
          { label: 'Ano', value: '2019' },
          { label: 'Cor', value: 'Preto' }, // Informação adicional
          { label: 'Manutenção', value: 'Última revisão em 01/2023' } // Informação adicional
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`p-4 rounded-lg shadow-md cursor-pointer ${theme === 'dark' ? 'bg-dark-200' : 'bg-light-Base'} ${clicked === index ? (theme === 'dark' ? 'bg-dark-300' : 'bg-light-200') : ''}`}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick(index)}
          >
            <p className={`text-sm font-medium ${theme === 'dark' ? 'text-light-400' : 'text-dark-600'}`}>{item.label}</p>
            <p className={`text-lg font-semibold ${theme === 'dark' ? 'text-light-300' : 'text-dark-300'}`}>{item.value}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default VehicleData;
