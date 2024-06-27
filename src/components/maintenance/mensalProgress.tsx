import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaExclamationCircle } from 'react-icons/fa';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const progressData = [
    { name: 'Estado Geral', status: 'Bom', icon: <FaCheckCircle className="text-green-500" /> },
    { name: 'Motor', status: 'Revisão Necessária', icon: <FaTimesCircle className="text-red-500" /> },
    { name: 'Óleo | Filtros', status: 'Revisão Agendada', icon: <FaExclamationCircle className="text-yellow-500" /> },
    { name: 'Sistema Elétrico', status: 'Bom', icon: <FaCheckCircle className="text-green-500" /> },
    { name: 'Bateria', status: 'Bom', icon: <FaCheckCircle className="text-green-500" /> }
];

const downloadReport = () => {
    // Lógica para download do relatório em PDF
    alert("Download do relatório em PDF iniciado!");
};

const MensalProgress: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow p-6 w-full max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-dark-50">Progresso Mensal</h2>
                <button className="text-dark-50" onClick={downloadReport}>
                    <ArrowDownTrayIcon className="h-6 w-6" />
                </button>
            </div>
            <div className="bg-light-Base rounded-lg   overflow-x-auto">
                <table className="w-full text-left whitespace-nowrap">
                    <thead>
                        <tr>
                            <th className="text-sm font-medium text-dark-100 p-2">NOME</th>
                            <th className="text-sm font-medium text-dark-100 p-2">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>

                        {progressData.map((item, index) => (
                            <tr key={index} className="border-t border-light-200">

                                <td className="p-2 text-dark-200">{item.name}</td>
                                <td className="p-2 flex items-center">
                                    {item.icon}
                                    <span className="ml-2 text-dark-200">{item.status}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MensalProgress;
