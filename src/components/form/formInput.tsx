import React, { useState } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'

interface FormInputProps {
  label: string;
  placeholder: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, placeholder }) => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setIsValid(value.length > 3);
  };

  return (
    <div className="mb-6">
      <label className="block text-dark-200 font-poppins font-semibold mb-2">{label}</label>
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          className={`w-full px-3 py-2  border ${isValid === null
              ? 'border-gray-300'
              : isValid
                ? 'border-green-500'
                : 'border-red-500'
            } rounded-xl shadow-sm focus:outline-none focus:ring-2 ${isValid === null
              ? 'focus:ring-blue-500'
              : isValid
                ? 'focus:ring-green-500'
                : 'focus:ring-red-500'
            }`}
        />
        {isValid !== null && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {isValid ? (
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
            ) : (
              <XCircleIcon className="h-5 w-5 text-red-500" />
            )}
          </div>
        )}
      </div>
      {isValid === false && (
        <p className="text-red-500 text-sm mt-1">Dados Incorretos.</p>
      )}
    </div>
  );
};

export default FormInput;
