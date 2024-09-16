import React, { useEffect, useState } from 'react';
import CalendarDates from './CalendarDates';
import styles from './Calendar.module.scss';
import CalendarAside from './components/CalendarAside';
import CalendarHead from './components/CalendarHead';
const Calendar = () => {
  const [commitData, setCommitData] = useState([]);
  const [nowDate,setNowDate] = useState({})
  const [commitMessage, setCommitMessage] = useState();
  // console.log(nowDate);
  
  useEffect(() => {
    const fetchCommits = async () => {
      // meeting_frontend 레포지토리 커밋 데이터 가져오기
      const frontendCommits = await fetch('https://api.github.com/repos/3on3/meeting_frontend/commits')
        .then(res => res.json());

      // meeting_backend 레포지토리 커밋 데이터 가져오기
      const backendCommits = await fetch('https://api.github.com/repos/3on3/meeting_backend/commits')
        .then(res => res.json());

        const parseDate = (dateString) => {
          const date = new Date(dateString);
          return {
            year: date.getFullYear(),
            month: date.getMonth() + 1, // 1월은 0, 2월은 1 ...
            date: date.getDate()
          };
        };

      // 각 레포지토리에서 커밋 날짜와 메시지 추출, 날짜 형식 변환
      const frontendData = frontendCommits.map(commit => ({
        date: parseDate(commit.commit.author.date), // yyyy.mm.dd 형식으로 변환
        message: commit.commit.message
      }));

      const backendData = backendCommits.map(commit => ({
        date: parseDate(commit.commit.author.date), // yyyy.mm.dd 형식으로 변환
        message: commit.commit.message
      }));

      // 두 레포지토리의 데이터를 병합하여 상태 업데이트
      const allCommitData = [...frontendData, ...backendData];
      setCommitData(allCommitData);
    };

    fetchCommits();
  }, []);

  
  
  return (
    <div className={styles.calendarWrap}>
      <div className={styles.calendarInner}>
        <CalendarHead/>
        <CalendarDates setNowDate={setNowDate} commitData={commitData} setCommitMessage={setCommitMessage}/>
      </div>
      <CalendarAside nowDate={nowDate} commitMessage={commitMessage}/>
    </div>
  );
};

export default Calendar;