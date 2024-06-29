import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/form/formInput';
import FormButton from '../components/form/formButton';
import SocialButtons from '../components/form/socialButtons';
import Plants from '../assets/plants.png';
import PlantsMobile from '../assets/plantsMobile.png';

const Register: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="flex flex-col md:flex-row h-screen font-inter">
      <div className="md:w-1/2 p-5 flex flex-col justify-center md:p-20 lg:p-40 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-dark-100 mb-4">Crie sua conta</h1>
        <h2 className="text-sm font-medium text-dark-100 py-2 ">Crie sua conta na Ecofleet e faça parte da mudança</h2>
        <h3 className="text-sm font-bold text-dark-100 mb-8">Não é necessário se cadastrar! Apenas clique no botão.</h3>

        <form onSubmit={handleRegister} className="space-y-4">
          <FormInput label="Nome" placeholder="Digite seu nome" />
          <FormInput label="Email" placeholder="Digite seu email" />
          <FormInput label="Senha" placeholder="Crie uma senha" />
          <FormInput label="Confirmar Senha" placeholder="Confirme sua nova senha" />
          <FormButton text="Criar minha conta" />
        </form>
        <div className="py-6">
          <div className="flex items-center mb-6">
            <hr className="flex-grow border-t border-dark-600" />
            <span className="mx-2 text-dark-500">Ou</span>
            <hr className="flex-grow border-t border-dark-600" />
          </div>
          <SocialButtons />
        </div>
      </div>
      <div className="md:w-1/2 h-full hidden md:block ">
        <img
          src={Plants}
          alt="Plants"
          className="object-cover h-full w-full rounded-r-lg"
        />
      </div>
      <div className="block md:hidden h-full">
        <img
          src={PlantsMobile}
          alt="Plants Mobile"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default Register;
