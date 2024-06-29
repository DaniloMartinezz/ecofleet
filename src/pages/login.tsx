import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/form/formInput';
import FormButton from '../components/form/formButton';
import SocialButtons from '../components/form/socialButtons';
import Plants from '../assets/plants.png';
import PlantsMobile from '../assets/plantsMobile.png';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col md:flex-row h-screen font-inter">
      <div className="md:w-1/2 p-5 flex flex-col justify-center md:p-20 lg:p-40 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-dark-100 mb-4">Bem vindo de volta!</h1>
        <h2 className="text-sm font-medium text-dark-100 ">Entre com seus dados para realizar login</h2>
        <h3 className="text-sm font-bold text-dark-100 py-2 mb-8">Não é necessário preencher os campos! Apenas clique no botão.</h3>

        <form onSubmit={handleLogin} className="space-y-4">
          <FormInput label="Email" placeholder="Seu email" />
          <FormInput label="Senha" placeholder="Sua senha" />
          <FormButton text="Fazer login" />
        </form>
        <div className="py-6 pb-44">
          <div className="flex items-center mb-6">
            <hr className="flex-grow border-t border-dark-600" />
            <span className="mx-2 text-dark-500">Ou</span>
            <hr className="flex-grow border-t border-dark-600" />
          </div>
          <SocialButtons />
        </div>
      </div>
      <div className="md:w-1/2 h-full hidden md:block">
        <img
          src={Plants}
          alt="Plants"
          className="object-cover h-full w-full rounded-r-lg"
        />
      </div>
      <div className="block md:hidden h-1/4">
        <img
          src={PlantsMobile}
          alt="Plants Mobile"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default Login;
