import React from 'react';

const infoData = [
  { label: 'Educação', value: 'FIAP - SP' },
  { label: 'Idiomas', value: 'English, Português' },
  { label: 'Departamento', value: 'Desenvolvedor Fullstack' },
  { label: 'Work History', value: 'FIESP' },
  { label: 'Trabalho atual', value: 'FIESP' },
  { label: 'Nascimento', value: '22 jan 2002' },
];

const ProfileInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow w-full max-w-4xl mx-auto p-6">
      <h2 className="text-xl font-bold text-dark-100 mb-4">Informações Gerais</h2>
      <p className="text-sm text-dark-500 mb-8">
        Nascido em Campinas, tenho 22 anos e sou apaixonado por tecnologia, meio ambiente e carros! Muito feliz em encontrar um sistema que junte tudo aquilo que gosto e me preocupo, tornando assim o planeta um lugar melhor para todos.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {infoData.map((info, index) => (
          <div key={index} className="bg-light-Base rounded-lg p-4 shadow">
            <p className="text-sm font-medium text-dark-400">{info.label}</p>
            <p className=" py-2 text-base font-normal text-dark-Base">{info.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileInfo;
