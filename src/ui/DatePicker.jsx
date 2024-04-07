import { useState } from 'react';
import DatePicker from 'react-datepicker';

const DateOfBirthPicker = ({ selectedDate, onChange }) => {
 const [startDate, setStartDate] = useState(selectedDate);

 return (
  <DatePicker
   selected={startDate}
   onChange={(date) => {
    setStartDate(date);
    onChange(date);
   }}
   showYearDropdown
   dateFormat="MM/dd/yyyy"
   maxDate={new Date()} // Optional: Set a maximum date (e.g., today)
   placeholderText="Select Date of Birth"
  />
 );
};

export default DateOfBirthPicker;