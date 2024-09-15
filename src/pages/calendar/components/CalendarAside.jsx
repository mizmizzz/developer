import React from 'react';
import styles from './CalendarAside.module.scss';

const CalendarAside = () => {
  return (
    <div className={styles.asideWrap}>
      <h1 className={styles.month}>September</h1>
      <div className={styles.inner}></div>
      {/* <p className={styles.btns}></p> */}
    </div>
  );
};

export default CalendarAside;