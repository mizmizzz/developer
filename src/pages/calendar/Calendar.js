import React, { useEffect, useState } from "react";
import CalendarDates from "./CalendarDates";
import styles from "./Calendar.module.scss";
import CalendarAside from "./components/CalendarAside";
import CalendarHead from "./components/CalendarHead";

const Calendar = () => {
  const [commitData, setCommitData] = useState([]);
  const [nowDate, setNowDate] = useState({});
  const [commitMessage, setCommitMessage] = useState();


  return (
    <div className={styles.calendarWrap}>
      <div className={styles.calendarInner}>
        <CalendarHead />
        <CalendarDates
          setNowDate={setNowDate}
          commitData={commitData}
          setCommitMessage={setCommitMessage}
        />
      </div>
      <CalendarAside nowDate={nowDate} commitMessage={commitMessage} />
    </div>
  );
};

export default Calendar;
