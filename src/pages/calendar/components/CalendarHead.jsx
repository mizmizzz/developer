import React from 'react';
import styles from './CalendarAside.module.scss';


const CalendarHead = () => {
  return (
    <ul className={styles.head}>
      <li>Sun</li>
      <li>Mon</li>
      <li>Tue</li>
      <li>Wed</li>
      <li>Thu</li>
      <li>Fri</li>
      <li>Sat</li>
    </ul>
  );
};

export default CalendarHead;