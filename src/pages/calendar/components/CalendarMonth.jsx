import React, { useEffect, useState } from "react";
import CalendarDay from "./CalendarDay";

const CalendarMonth = ({ styles, month, isFirst, isLast, id, commitData, setCommitMessage }) => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const year = month.getFullYear();
    const monthIndex = month.getMonth();

    const firstDateOfMonth = new Date(year, monthIndex, 1);
    const lastDateOfMonth = new Date(year, monthIndex + 1, 0);
    const firstDayOfWeek = firstDateOfMonth.getDay();
    const lastDateOfPrevMonth = new Date(year, monthIndex, 0).getDate();

    const daysInMonth = [];

    if (isFirst) {
      for (let i = firstDayOfWeek - 1; i >= 0; i--) {
        const prevDate = new Date(year, monthIndex - 1, lastDateOfPrevMonth - i);
        daysInMonth.push({
          year: prevDate.getFullYear(),
          month: prevDate.getMonth() + 1,
          date: prevDate.getDate(),
          day: prevDate.getDay(),
          isCurrentMonth: false,
          id // 고유 id
        });
      }
    }

    for (let day = 1; day <= lastDateOfMonth.getDate(); day++) {
      const currentDate = new Date(year, monthIndex, day);
      daysInMonth.push({
        year: currentDate.getFullYear(),
        month: currentDate.getMonth() + 1,
        date: currentDate.getDate(),
        day: currentDate.getDay(),
        isCurrentMonth: true,
        id // 고유 id
      });
    }

    if (isLast) {
      const totalDays = daysInMonth.length;
      const remainingDays = 42 - totalDays;
      const daysToAdd = remainingDays >= 7 ? remainingDays - 7 : remainingDays; // 7개를 제외한 나머지 날짜만 추가

      for (let i = 1; i <= daysToAdd; i++) {
        const nextDate = new Date(year, monthIndex + 1, i);
        daysInMonth.push({
          year: nextDate.getFullYear(),
          month: nextDate.getMonth() + 1,
          date: nextDate.getDate(),
          day: nextDate.getDay(),
          isCurrentMonth: false,
          id // 고유 id
        });
      }
    }

    setDays(daysInMonth);
  }, [month]);

  return (
    <>
      {days.map((day, index) => (
        <CalendarDay key={index} styles={styles} day={day} id={day.id} commitData={commitData} setCommitMessage={setCommitMessage}/>
      ))}
    </>
  );
};

export default CalendarMonth;
