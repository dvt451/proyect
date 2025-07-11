import React, { useEffect, useState,useRef } from 'react'

 
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function Datepicker() {
   const [showCalendar, setShowCalendar] = useState(false);

   let currentDate = new Date();
   let currentDay = currentDate.getDate();
   currentDate.setDate(currentDay + 1);

const [selectionRange, setSelectionRange] = useState([
    {
      startDate: new Date(),
      endDate: currentDate,
      key: 'selection',
    },
  ]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const calendarRef = useRef(null);

  useEffect(() => {
    if (selectionRange[0] && selectionRange[0].startDate) {
      // Format the start and end dates to display in the input fields
      const formattedStartDate = selectionRange[0].startDate.toLocaleDateString('en-US');
      const formattedEndDate = selectionRange[0].endDate.toLocaleDateString('en-US');
      setStartDate(formattedStartDate);
      setEndDate(formattedEndDate);
    }
  }, [selectionRange]);

  useEffect(() => {
    // Add event listener to detect clicks outside of the calendar
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        // Click occurred outside of the calendar, close the calendar
        setShowCalendar(false);
      }
    };

    // Add event listener when the calendar is shown
    if (showCalendar) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Remove event listener when the component unmounts or the calendar is hidden
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCalendar]);

  const handleDateClick = () => {
    setShowCalendar(true);
  };

  const handleDateChange = (ranges) => {
    // Update state with the selected date range
    setSelectionRange([ranges.selection]);
  };
  return (
    <div className='datepicker'>
      <div>
        <input type="text" value={startDate} onClick={handleDateClick} readOnly />
      </div>
      <div>
        <input type="text" value={endDate} onClick={handleDateClick} readOnly />
      </div>
      {showCalendar && (
        <div ref={calendarRef}>
          <DateRange
            ranges={selectionRange}
            onChange={handleDateChange}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            direction="horizontal"
          />
        </div>
      )}
    </div>
  )
}
