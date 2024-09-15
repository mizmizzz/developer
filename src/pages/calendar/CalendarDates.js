import React, { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import styles from './CalendarDates.module.scss';
// import CalendarDate from './components/CalendarDate';
import CalendarMonth from './components/CalendarMonth';

const CalendarDates = () => {

  const [months, setMonths] = useState([]);
  const [scrollPos, setScrollPos] = useState(0);

    // 초기 데이터로 6개월 렌더링 (현재 달 포함)
    useEffect(() => {
      const currentDate = new Date();
      const initialMonths = [];
      
      for (let i = 0; i < 6; i++) {
        initialMonths.push(new Date(currentDate.getFullYear(), currentDate.getMonth() - i));
      }
      setMonths(initialMonths.reverse());
    }, []);
    
  
  return (
    <>
       {months.map((month, index) => {
        // 첫 번째 월과 마지막 월을 구분
        const isFirst = index === 0;
        const isLast = index === months.length - 1;
        
        return (
          <CalendarMonth 
            key={index} 
            styles={styles} 
            month={month} 
            isFirst={isFirst} 
            isLast={isLast} 
          />
        );
      })}
    </>
  );
};

export default CalendarDates;
