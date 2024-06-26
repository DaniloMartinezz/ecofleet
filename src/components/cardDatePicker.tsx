import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const DatePicker: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center mb-2">
        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} className="text-green-600">
          &#60;
        </button>
        <div className="flex space-x-4">
          <span className="font-medium text-lg text-green-600">{format(currentMonth, 'MMMM', { locale: ptBR })}</span>
          <span className="font-medium text-lg text-green-600">{format(currentMonth, 'yyyy')}</span>
        </div>
        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="text-green-600">
          &#62;
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = 'iiii';
    const days = [];

    let startDate = startOfWeek(currentMonth, { locale: ptBR });

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-xs font-medium text-center text-gray-500" key={i}>
          {format(addDays(startDate, i), dateFormat, { locale: ptBR }).substring(0, 2)}
        </div>
      );
    }

    return <div className="grid grid-cols-7">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = 'd';
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`p-2 mx-auto text-center cursor-pointer rounded-full ${
              !isSameMonth(day, monthStart)
                ? 'text-gray-400'
                : isSameDay(day, selectedDate)
                ? 'bg-green-600 text-white'
                : 'text-gray-900'
            }`}
            key={day.toString()}
            onClick={() => setSelectedDate(cloneDay)}
          >
            <span className="block w-8 h-8 leading-8">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="">{rows}</div>;
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 w-80">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default DatePicker;
