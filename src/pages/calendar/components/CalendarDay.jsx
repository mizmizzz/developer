import React from "react";

const CalendarDay = ({ styles, day, id, commitData, setCommitMessage }) => {
  console.log('day',day);

// 해당 날짜에 대한 커밋을 필터링
const commitsOnDate = commitData.filter(commit =>
  commit.date.year === day.year &&
  commit.date.month === day.month &&
  commit.date.date === day.date
);


  return (
    <div
      id={id}
      className={
        day.isCurrentMonth
          ? `${styles.date}`
          : `${styles.date} ${styles.isAnotherMonth}`
      }
    >
    {day.isCurrentMonth && (
        <>
          <h2>{day.date}</h2>
          {commitsOnDate.length > 0 && (
            <ul className={styles.contentList}>
              {commitsOnDate.map((commit, index) => (
                <li key={index}>{commit.message}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default CalendarDay;
