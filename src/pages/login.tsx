import React from 'react';
import FormInput from '../components/form/formInput';
import FormButton from '../components/form/formButton';
import SocialButtons from '../components/form/socialButtons';
import Plants from '../assets/plants.png';
import PlantsMobile from '../assets/plantsMobile.png';

const Register: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="md:w-1/2 p-5  flex flex-col justify-center md:p-40">
                <h1 className="text-2xl py-5">Bem vindo de volta!</h1>
                <h2 className="text-sm font-semibold">Entre com seus dados para realizar login</h2>
                <div className="pt-40">
                    <form action="submit">
                        <FormInput label="Email" placeholder="Seu email" />
                        <FormInput label="Senha" placeholder="Sua senha" />
                        <FormButton text="Fazer login" />
                    </form>
                </div>
                <div className="py-4">
                    <div className="flex justify-center items-center my-4 font-poppins font-medium">
                        <hr className="flex-grow border-t border-dark-600" />
                        <span className="mx-2 pb-1 text-dark-500">Ou</span>
                        <hr className="flex-grow border-t border-dark-600" />
                    </div>
                    <SocialButtons />
                </div>
            </div>
            <div className="md:w-1/2 h-full">
                <img 
                    src={Plants} 
                    alt="Plants" 
                    className="hidden md:block object-cover h-full w-full  rounded-[2.5rem]" 
                />
                <img 
                    src={PlantsMobile} 
                    alt="Plants Mobile" 
                    className="block md:hidden object-cover h-full w-full " 
                />
            </div>
        </div>
    );
};

export default Register;