import React, { useState } from 'react';
import { motion } from 'framer-motion';

const VehicleData: React.FC = () => {
  const [clicked, setClicked] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClicked(clicked === index ? null : index);
  };

  return (
    <div className="bg-light-Base rounded-lg shadow p-6 w-full max-w-md mx-auto">
      <h2 className="text-lg font-medium text-dark-50 mb-4">Visão Geral do Veículo</h2>
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
          { label: 'Combustível', value: 'Gasolina' }, // Informação adicional
          { label: 'Manutenção', value: 'Última revisão em 01/2023' } // Informação adicional
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`p-4 rounded-lg bg-light-Base shadow-md cursor-pointer ${
              clicked === index ? 'bg-light-200' : ''
            }`}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick(index)}
          >
            <p className="text-sm font-medium text-dark-600">{item.label}</p>
            <p className="text-lg font-semibold text-dark-300">{item.value}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default VehicleData;
