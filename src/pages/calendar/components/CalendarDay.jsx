import React from 'react';

const CalendarDay = ({ styles, day }) => {
  
  console.log(day);
  
  // const formatDate = (date) => {
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
  //   const day = String(date.getDate()).padStart(2, '0');
  //   return `${year}.${month}.${day}`;
  // };
  return (
    <div className={day.isCurrentMonth? `${styles.date}` : `${styles.date} ${styles.isAnotherMonth}`}>
      
      {day.isCurrentMonth && (
        <>
          <h2>{day.date}</h2>
          <ul className={styles.contentList}>
            <li>메모 1</li>
            <li>메모메모 22메메메메모모모모</li>
          </ul>
        </>
      
        )}
    </div>
  );
};

export default CalendarDay;
