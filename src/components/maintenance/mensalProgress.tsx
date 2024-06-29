import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaExclamationCircle } from 'react-icons/fa';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../../context/ThemeContext';

const progressData = [
    { name: 'Estado Geral', status: 'Bom', icon: <FaCheckCircle className="text-green-500" /> },
    { name: 'Motor', status: 'Revisão Necessária', icon: <FaTimesCircle className="text-red-500" /> },
    { name: 'Óleo | Filtros', status: 'Revisão Agendada', icon: <FaExclamationCircle className="text-yellow-500" /> },
    { name: 'Sistema Elétrico', status: 'Bom', icon: <FaCheckCircle className="text-green-500" /> },
    { name: 'Bateria', status: 'Bom', icon: <FaCheckCircle className="text-green-500" /> }
];

const downloadReport = () => {
    alert("Download do relatório em PDF iniciado!");
};

const MensalProgress: React.FC = () => {
    const { theme } = useTheme();

    return (
        <div className={`rounded-lg shadow p-6 w-full md:w-[70vh] mx-auto md:h-full ${theme === 'dark' ? 'bg-dark-100 text-light-900' : 'bg-white text-dark-200'}`}>
            <div className="flex justify-between items-center mb-4">
                <h2 className={`text-lg font-medium ${theme === 'dark' ? 'text-light-400' : 'text-dark-50'}`}>Progresso Mensal</h2>
                <button className={`text-${theme === 'dark' ? 'light-400' : 'dark-50'}`} onClick={downloadReport}>
                    <ArrowDownTrayIcon className="h-6 w-6" />
                </button>
            </div>
            <div className={`rounded-lg overflow-x-auto ${theme === 'dark' ? 'bg-dark-200' : 'bg-light-Base'}`}>
                <table className="w-full text-left whitespace-nowrap">
                    <thead>
                        <tr>
                            <th className={`text-sm font-medium p-2 ${theme === 'dark' ? 'text-light-400' : 'text-dark-100'}`}>NOME</th>
                            <th className={`text-sm font-medium p-2 ${theme === 'dark' ? 'text-light-400' : 'text-dark-100'}`}>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {progressData.map((item, index) => (
                            <tr key={index} className={`border-t ${theme === 'dark' ? 'border-dark-300' : 'border-light-200'}`}>
                                <td className={`p-2 py-4 ${theme === 'dark' ? 'text-light-300' : 'text-dark-200'}`}>{item.name}</td>
                                <td className="p-2 py-4 flex items-center">
                                    {item.icon}
                                    <span className={`ml-2 ${theme === 'dark' ? 'text-light-300' : 'text-dark-200'}`}>{item.status}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="md:pb-[10.5rem]"></div>
        </div>
    );
};

export default MensalProgress;
