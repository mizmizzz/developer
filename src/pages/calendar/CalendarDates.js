import React, { useEffect, useState, useRef } from 'react';
import 'react-calendar/dist/Calendar.css';
import styles from './CalendarDates.module.scss';
import CalendarMonth from './components/CalendarMonth';

const CalendarDates = ({setNowDate, commitData, setCommitMessage}) => {
  const [months, setMonths] = useState([]);
  const [mostVisibleMonth, setMostVisibleMonth] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const currentDate = new Date();
    const initialMonths = [];

    for (let i = 0; i < 6; i++) {
      initialMonths.push(new Date(currentDate.getFullYear(), currentDate.getMonth() - i));
    }
    setMonths(initialMonths.reverse());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // console.log('scr');
      
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

    // 컨테이너 내부의 스크롤 이벤트 핸들링
    const containerElement = containerRef.current;
    containerElement.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 로드 시에도 호출

    return () => {
      containerElement.removeEventListener('scroll', handleScroll);
    };
  }, [months]);

  useEffect(()=>{
    if(mostVisibleMonth){
      setNowDate({
        year:mostVisibleMonth.getFullYear(),
        month:mostVisibleMonth.getMonth()
      })
    } else {
      setNowDate({})
    }
  },[mostVisibleMonth])
  console.log(mostVisibleMonth ? mostVisibleMonth.toLocaleString('default', { month: 'long' }) + ' ' + mostVisibleMonth.getFullYear() : null);
  const messegeClickHandler = (e) => {
    // 클릭된 요소가 li인지 확인
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
