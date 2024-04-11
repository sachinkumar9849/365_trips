import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PickUpLocation from "./PickUpLocation ";

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <div className="w-full max-w-md">
        <label htmlFor="date-picker" className="block mb-2 font-medium">
          Date:
        </label>
        <DatePicker
          id="date-picker"
          selected={selectedDate}
          onChange={handleDateChange}
          showTimeInput
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <PickUpLocation/>
      </div>
    </div>
  );
};

export default BookingForm;
