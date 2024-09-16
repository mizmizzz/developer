import React, { useEffect, useState } from "react";
import CalendarDates from "./CalendarDates";
import styles from "./Calendar.module.scss";
import CalendarAside from "./components/CalendarAside";
import CalendarHead from "./components/CalendarHead";

const Calendar = () => {
  const [commitData, setCommitData] = useState([]);
  const [nowDate, setNowDate] = useState({});
  const [commitMessage, setCommitMessage] = useState();
  const token = process.env.REACT_APP_GITHUB_TOKEN;

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        // 브랜치 목록 가져오기
        const getBranches = async (repo) => {
          const response = await fetch(`https://api.github.com/repos/3on3/${repo}/branches`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          
          if (!response.ok) {
            throw new Error(`Failed to fetch branches for repo: ${repo}. Status: ${response.status}`);
          }
          
          const branches = await response.json();
          return branches;
        };

        // 특정 브랜치의 커밋 가져오기
        const getCommitsForBranch = async (repo, branch) => {
          const response = await fetch(
            `https://api.github.com/repos/3on3/${repo}/commits?sha=${branch}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          
          if (!response.ok) {
            throw new Error(`Failed to fetch commits for branch: ${branch}. Status: ${response.status}`);
          }
          
          const commits = await response.json();
          return commits;
        };

        // 커밋 필터링
        const filterCommitsByUser = (commits, username) => {
          return commits.filter((commit) => commit.author?.login === username);
        };

        // 모든 브랜치에서 커밋 가져오기
        const getAllCommitsForUser = async (repo, username) => {
          const branches = await getBranches(repo);
          let userCommits = [];

          for (const branch of branches) {
            const commits = await getCommitsForBranch(repo, branch.name);
            const userCommitsInBranch = filterCommitsByUser(commits, username);
            userCommits = userCommits.concat(userCommitsInBranch);
          }

          return userCommits;
        };

        const myFrontendCommits = await getAllCommitsForUser("meeting_frontend", "mizmizzz");
        const myBackendCommits = await getAllCommitsForUser("meeting_backend", "mizmizzz");

        const parseDate = (dateString) => {
          const date = new Date(dateString);
          return {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            date: date.getDate(),
          };
        };

        const frontendData = myFrontendCommits.map((commit) => ({
          date: parseDate(commit.commit.author.date),
          message: commit.commit.message,
        }));

        const backendData = myBackendCommits.map((commit) => ({
          date: parseDate(commit.commit.author.date),
          message: commit.commit.message,
        }));

        const allCommitData = [...frontendData, ...backendData];
        setCommitData(allCommitData);
      } catch (error) {
        console.error("Error fetching commits:", error);
      }
    };

    fetchCommits();
  }, [token]);

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
