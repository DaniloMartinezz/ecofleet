import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale'; // Use ptBR para português do Brasil

registerLocale('pt-BR', ptBR);

const CardDatePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const years = Array.from(new Array(10), (val, index) => new Date().getFullYear() + index);
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto md:max-w-2xl flex justify-center items-center">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        locale="pt-BR"
        dateFormat="dd MMMM yyyy"
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled
        }) => (
          <div className="react-datepicker__header__dropdown">
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled} className="text-[#2B3674]">
              {"<"}
            </button>
            <div className="flex space-x-0">
              <select
                value={date.getFullYear()}
                onChange={({ target: { value } }) => changeYear(Number(value))}
                className="bg-[#F4F7FE] border-none rounded-full text-center outline-none font-bold text-lg p-2"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <select
                value={months[date.getMonth()]}
                onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
                className="bg-[#F4F7FE] border-none rounded-full text-center outline-none font-bold text-lg p-2"
              >
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled} className="text-[#2B3674]">
              {">"}
            </button>
          </div>
        )}
        inline
        calendarClassName="w-full text-center "
        dayClassName={(date) => 
          date.getDate() === new Date().getDate() ? 'bg-green-500 text-white rounded-full' : ''
        }
      />
    </div>
  );
};

export default CardDatePicker;
