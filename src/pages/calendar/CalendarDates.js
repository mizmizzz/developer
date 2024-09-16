import React, { useEffect, useState, useRef } from 'react';
import 'react-calendar/dist/Calendar.css';
import styles from './CalendarDates.module.scss';
import CalendarMonth from './components/CalendarMonth';

const CalendarDates = ({ setNowDate, commitData, setCommitMessage }) => {
  const [months, setMonths] = useState([]);
  const [mostVisibleMonth, setMostVisibleMonth] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const currentDate = new Date();
    const initialMonths = [];

    for (let i = 0; i < 2; i++) {
      initialMonths.push(new Date(currentDate.getFullYear(), currentDate.getMonth() - i));
    }
    setMonths(initialMonths.reverse());

    // setNowDate({
    //   year:months[0].year,
    //   month:months[0].month,
    //   date: months[0].date
    // })
  }, []);

  // useEffect(() => {
  //   const scrollToCurrentMonth = () => {
  //     if (!containerRef.current) return;

  //     const currentDate = new Date();
  //     const currentMonthIndex = months.findIndex(month =>
  //       month.getFullYear() === currentDate.getFullYear() && month.getMonth() === currentDate.getMonth()
  //     );

  //     if (currentMonthIndex !== -1) {
  //       const currentMonthElement = document.getElementById(`month-${currentMonthIndex}`);
  //       if (currentMonthElement) {
  //         // Delay the scroll adjustment to ensure elements are fully rendered
  //         setTimeout(() => {
  //           containerRef.current.scrollTop = currentMonthElement.offsetTop;
  //         }, 100);
  //       }
  //     }
  //   };

  //   scrollToCurrentMonth();
  // }, [months]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerBottom = containerRect.bottom;

      let maxVisibleRatio = 0;
      let mostVisible = null;

      months.forEach((_, index) => {
        const monthElement = document.getElementById(`month-${index}`);
        if (!monthElement) return;

        const monthRect = monthElement.getBoundingClientRect();
        const monthTop = Math.max(monthRect.top, containerTop);
        const monthBottom = Math.min(monthRect.bottom, containerBottom);
        const visibleHeight = Math.max(0, monthBottom - monthTop);
        const monthHeight = monthRect.height;
        const visibleRatio = visibleHeight / monthHeight;

        if (visibleRatio > maxVisibleRatio) {
          maxVisibleRatio = visibleRatio;
          mostVisible = months[index];
        }
      });

      setMostVisibleMonth(mostVisible);
    };

    const containerElement = containerRef.current;
    containerElement.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      containerElement.removeEventListener('scroll', handleScroll);
    };
  }, [months]);

  useEffect(() => {
    if (mostVisibleMonth) {
      setNowDate({
        year: mostVisibleMonth.getFullYear(),
        month: mostVisibleMonth.getMonth(),
      });
    } else {
      setNowDate({});
    }
  }, [mostVisibleMonth]);

  const messegeClickHandler = (e) => {
    const targetElement = e.target;
    if (targetElement.tagName === 'LI') {
      setCommitMessage(targetElement.innerText);
    } else {
      setCommitMessage(null);
    }
  };

  return (
    <div ref={containerRef} className={styles.datesWrap} onClick={messegeClickHandler}>
      {months.map((month, index) => {
        const isFirst = index === 0;
        const isLast = index === months.length - 1;

        return (
          <CalendarMonth
            key={index}
            styles={styles}
            month={month}
            isFirst={isFirst}
            isLast={isLast}
            id={`month-${index}`}
            commitData={commitData}
            setCommitMessage={setCommitMessage}
          />
        );
      })}
    </div>
  );
};

export default CalendarDates;
