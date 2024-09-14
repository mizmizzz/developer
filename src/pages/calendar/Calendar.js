import React, { useEffect, useState } from 'react';
import CalendarDates from './components/CalendarDates';
import styles from './Calendar.module.scss';
const Calendar = () => {
  const [commitData, setCommitData] = useState([]);

  useEffect(() => {
    const fetchCommits = async () => {
      // meeting_frontend 레포지토리 커밋 데이터 가져오기
      const frontendCommits = await fetch('https://api.github.com/repos/3on3/meeting_frontend/commits')
        .then(res => res.json());

      // meeting_backend 레포지토리 커밋 데이터 가져오기
      const backendCommits = await fetch('https://api.github.com/repos/3on3/meeting_backend/commits')
        .then(res => res.json());

      // 날짜를 yyyy.mm.dd 형식으로 변환하는 함수
      const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
      };

      // 각 레포지토리에서 커밋 날짜와 메시지 추출, 날짜 형식 변환
      const frontendData = frontendCommits.map(commit => ({
        date: formatDate(commit.commit.author.date), // yyyy.mm.dd 형식으로 변환
        message: commit.commit.message
      }));

      const backendData = backendCommits.map(commit => ({
        date: formatDate(commit.commit.author.date), // yyyy.mm.dd 형식으로 변환
        message: commit.commit.message
      }));

      // 두 레포지토리의 데이터를 병합하여 상태 업데이트
      const allCommitData = [...frontendData, ...backendData];
      setCommitData(allCommitData);
    };

    fetchCommits();
  }, []);

  console.log(commitData);
  
  // 커밋이 있는 날짜에 메시지를 표시하는 함수
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
      const commitsOnDate = commitData.filter(commit => commit.date === formattedDate);

      if (commitsOnDate.length > 0) {
        return (
          <ul>
            {commitsOnDate.map((commit, index) => (
              <li key={index} style={{ fontSize: '10px', backgroundColor: '#f0f0f0', padding: '2px' }}>
                {commit.message}
              </li>
            ))}
          </ul>
        );
      }
    }
    return null;
  };
  return (
    <div className={styles.calendarWrap}>
      <CalendarDates/>
    </div>
  );
};

export default Calendar;