import React, { useState } from 'react';
import { format } from 'date-fns';
import calender from '../../../assets/images/dateSelector/calender.png';

const DateSelector: React.FC = () => {

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleDateClick = (day: number) => {

    const newDate = new Date(selectedDate?.getFullYear() || new Date().getFullYear(), selectedDate?.getMonth() || new Date().getMonth(), day);

    setSelectedDate(newDate);
    setIsCalendarOpen(false);

  };

  const handleToggleCalendar = () => { setIsCalendarOpen(!isCalendarOpen); };

  return (
    <div className=' flex flex-row justify-end'>
      <div className="relative w-80 font-inter">
        <div className='flex flex-row items-center'>
          <div className="relative w-52">
            <input
              type="text"
              value={selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'Select a date'}
              readOnly
              onClick={handleToggleCalendar}
              className="w-full text-center border rounded-md p-2 pr-10 cursor-pointer text-gray-700 h-10"
              placeholder="Select a date"
            />
            <img
              src={calender}
              alt="Calendar Icon"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
              onClick={handleToggleCalendar}
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-inter px-4 rounded-md font-medium ml-10 h-10">
            Filter
          </button>
        </div>


        {isCalendarOpen && (
          <div className="absolute z-10 w-full flex flex-col bg-white border shadow-lg rounded-xl overflow-hidden font-inter font-semibold text-gray-700">
            <div className="p-3 space-y-0.5">
              <div className="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
                <div className="col-span-1">
                  <button
                    type="button"
                    className="flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full"
                    aria-label="Previous"
                    onClick={() => setSelectedDate((prev) => prev ? new Date(prev.getFullYear(), prev.getMonth() - 1, 1) : new Date())}
                  >
                    {'<'}
                  </button>
                </div>

                <div className="col-span-3 flex justify-center items-center gap-x-1 font-medium text-gray-700">

                  <select className="border rounded p-2 no-scrollbar hover:cursor-pointer"
                    value={selectedDate ? format(selectedDate, 'MMMM') : format(new Date(), 'MMMM')}
                    onChange={(e) => {
                      const monthIndex = new Date(`${e.target.value} 1, ${selectedDate?.getFullYear() || new Date().getFullYear()}`).getMonth();
                      setSelectedDate(new Date(selectedDate?.getFullYear() || new Date().getFullYear(), monthIndex, 1));
                    }} >

                    {Array.from({ length: 12 }, (_, i) => new Date(0, i).toLocaleString('default', { month: 'long' }))
                      .map(month => (<option key={month}>{month}</option>))}

                  </select>

                  <span className="text-gray-700">/</span>

                  <select
                    className="border rounded p-2 no-scrollbar hover:cursor-pointer"
                    value={selectedDate ? selectedDate.getFullYear() : new Date().getFullYear()}
                    onChange={(e) => setSelectedDate(new Date(parseInt(e.target.value), selectedDate?.getMonth() || new Date().getMonth(), 1))}
                  >
                    {Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - 49 + i).map(year => (
                      <option key={year}>{year}</option>
                    ))}
                  </select>
                </div>

                <div className="col-span-1 flex justify-end">
                  <button
                    type="button"
                    className="flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full"
                    aria-label="Next"
                    onClick={() => setSelectedDate((prev) => prev ? new Date(prev.getFullYear(), prev.getMonth() + 1, 1) : new Date())}
                  >
                    {'>'}
                  </button>
                </div>
              </div>

              <div className="flex pb-1.5">
                {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
                  <span key={day} className={`m-px w-10 block text-center text-sm text-gray-600 ${day == 'Mo' && 'text-blue-500'} ${day == 'Su' && 'text-red-500'}`}>{day}</span>
                ))}
              </div>

              <div className="flex flex-wrap text-gray-700">
                {Array.from({ length: 31 }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`m-px size-10  text-gray-700 flex justify-center items-center border ${selectedDate?.getDate() === i + 1 ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-800'} text-sm font-poppins font-semibold rounded-full hover:border-blue-600 hover:text-blue-600`}
                    onClick={() => handleDateClick(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateSelector;
