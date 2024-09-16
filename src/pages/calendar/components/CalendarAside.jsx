import React, { useEffect, useState } from "react";
import styles from "./CalendarAside.module.scss";

const CalendarAside = ({ nowDate, commitMessage }) => {
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [month, setMonth] = useState();
  useEffect(() => {
    if (
      nowDate !== null &&
      nowDate.month >= 0 &&
      nowDate.month < monthList.length
    ) {
      setMonth(monthList[nowDate.month]);
    }
  }, [nowDate]);
  return (
    <div className={styles.asideWrap}>
      <h1 className={styles.month}>{month}</h1>
      <div className={styles.inner}>
        {commitMessage && <p className={styles.content}>{commitMessage}</p>}
      </div>
      {/* <p className={styles.btns}></p> */}
    </div>
  );
};

export default CalendarAside;
