import React from 'react';

interface FormButtonProps {
  text: string;
}

const FormButton: React.FC<FormButtonProps> = ({ text }) => {
  return (
    <button
      className=" bg-button-green hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full mt-4"
    >
      {text}
    </button>
  );
};

export default FormButton;
