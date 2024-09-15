import React, { useEffect, useState } from "react";
import CalendarDay from "./CalendarDay";

const CalendarMonth = ({ styles, month, isFirst, isLast }) => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    // 전달된 month에 해당하는 달의 첫 번째 날짜와 마지막 날짜 계산
    const year = month.getFullYear();
    const monthIndex = month.getMonth();

    // 해당 월의 첫 번째 날과 마지막 날
    const firstDateOfMonth = new Date(year, monthIndex, 1);
    const lastDateOfMonth = new Date(year, monthIndex + 1, 0);

    // 첫 번째 날의 요일 (0: 일요일, 1: 월요일, ...)
    const firstDayOfWeek = firstDateOfMonth.getDay();

    // 이전 달의 마지막 날 계산
    const lastDateOfPrevMonth = new Date(year, monthIndex, 0).getDate();

    const daysInMonth = [];

    if (isFirst) {
      // 이전 달의 마지막 몇일을 앞에 추가 (최대 6일)
      for (let i = firstDayOfWeek - 1; i >= 0; i--) {
        const prevDate = new Date(
          year,
          monthIndex - 1,
          lastDateOfPrevMonth - i
        );
        daysInMonth.push({
          year: prevDate.getFullYear(),
          month: prevDate.getMonth() + 1,
          date: prevDate.getDate(),
          day: prevDate.getDay(),
          isCurrentMonth: false, // 이전 달 날짜임을 표시
        });
      }
   
    }
    
    // 이번 달 날짜 추가
    for (let day = 1; day <= lastDateOfMonth.getDate(); day++) {
      const currentDate = new Date(year, monthIndex, day);
      daysInMonth.push({
        year: currentDate.getFullYear(),
        month: currentDate.getMonth() + 1,
        date: currentDate.getDate(),
        day: currentDate.getDay(),
        isCurrentMonth: true, // 이번 달 날짜
      });
    }
   
    if(isLast){
         // 다음 달의 날짜를 추가해서 마지막 줄을 채움 (42칸을 맞추기 위해)
         const totalDays = daysInMonth.length;
         const remainingDays = 42 - totalDays; // 42칸 중에 남은 칸
   
         for (let i = 1; i <= remainingDays; i++) {
           const nextDate = new Date(year, monthIndex + 1, i);
           daysInMonth.push({
             year: nextDate.getFullYear(),
             month: nextDate.getMonth() + 1,
             date: nextDate.getDate(),
             day: nextDate.getDay(),
             isCurrentMonth: false, // 다음 달 날짜임을 표시
           });
         }
    }

    setDays(daysInMonth);
  }, [month]);

  return (
    <>
      {days.map((day, index) => (
        <CalendarDay key={index} styles={styles} day={day} />
      ))}
    </>
  );
};

export default CalendarMonth;
