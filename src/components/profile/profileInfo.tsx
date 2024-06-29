import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const infoData = [
  { label: 'Educação', value: 'FIAP - SP' },
  { label: 'Idiomas', value: 'English, Português' },
  { label: 'Departamento', value: 'Desenvolvedor Fullstack' },
  { label: 'Work History', value: 'FIESP' },
  { label: 'Trabalho atual', value: 'FIESP' },
  { label: 'Nascimento', value: '22 jan 2002' },
];

const ProfileInfo: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`rounded-lg shadow w-full max-w-4xl mx-auto p-6 ${theme === 'dark' ? 'bg-dark-100 text-light-900' : 'bg-white text-dark-200'}`}>
      <h2 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-light-200' : 'text-dark-100'}`}>Informações Gerais</h2>
      <p className={`text-sm mb-8 ${theme === 'dark' ? 'text-light-500' : 'text-dark-500'}`}>
        Nascido em Campinas, tenho 22 anos e sou apaixonado por tecnologia, meio ambiente e carros! Muito feliz em encontrar um sistema que junte tudo aquilo que gosto e me preocupo, tornando assim o planeta um lugar melhor para todos.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {infoData.map((info, index) => (
          <div key={index} className={`rounded-lg p-4 shadow ${theme === 'dark' ? 'bg-dark-200' : 'bg-light-Base'}`}>
            <p className={`text-sm font-medium ${theme === 'dark' ? 'text-light-400' : 'text-dark-400'}`}>{info.label}</p>
            <p className={`py-2 text-base font-normal ${theme === 'dark' ? 'text-light-Base' : 'text-dark-Base'}`}>{info.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileInfo;
