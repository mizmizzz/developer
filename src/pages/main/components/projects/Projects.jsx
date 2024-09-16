import React from "react";
import styles from "./Projects.module.scss";
import projectUrl from "../../../../assets/projects/gwating.pdf";
import videoUrl from '../../../../assets/images/video/final.mp4'
const Projects = () => {
  return (
    <div className={styles.projectsWrap}>
      <h2><span>Projects</span></h2>
      <div className={styles.projectBox}>
        <p className={styles.video}>
          <video src={videoUrl} type="video/mp4" muted controls></video>
          </p>
        <div className={`${styles.desBox} ${styles.half}`}>
          <h3>title</h3>
          <p className={styles.desList}>과팅</p>
        </div>
        <div className={`${styles.desBox} ${styles.half}`}>
          <h3>team</h3>
          <p className={styles.desList}>3on3</p>
        </div>
        <div className={`${styles.desBox}`}>
          <h3>links</h3>
          <p className={styles.desList}>
            <a className={styles.service} href="https://github.com/3on3">
              https://github.com/3on3
            </a>
            <a className={styles.git} href="https://github.com/3on3">
              https://github.com/3on3
            </a>
            <a
              className={styles.notion}
              href="https://www.notion.so/5658f2d2fbd54e11a2b3525bfd048bce?pvs=4"
            >
              https://www.notion.so/5658f2d2fbd54e11a2b3525bfd048bce?pvs=4
            </a>
          </p>
        </div>
        <div className={`${styles.desBox}`}>
          <h3>file</h3>
          <p className={styles.desList}>
            <a className={styles.down} href="/gwating.pdf" download={""}><span class="lnr lnr-link"></span> gwating.pdf</a>
          </p>
        </div>

        <div className={`${styles.desBox}`}>
          <h3>skills</h3>
          <ul className={`${styles.desList} ${styles.skills}`}>
            <li>ReactJS</li>
            <li>JavaScript</li>
            <li>AJAX</li>
            <li>SASS/SCSS</li>
            <li>JAVA</li>
            <li>SpringBoot</li>
            <li>JPA</li>
            <li>MySQL</li>
            <li>MariaDB</li>
            <li>Docker</li>
            <li>Redis</li>
            <li>WebSocket</li>
            <li>AWS</li>
            <li>GIT</li>
            <li>GitHub</li>
            <li>Figma</li>
            <li>Discord</li>
            <li>Notion</li>
          </ul>
        </div>
        <div className={`${styles.desBox}`}>
          <h3>services</h3>
          <ul className={styles.desList}>
            <li>
              대학 이메일 인증을 완료한 대학생들을 대상으로 M:M 미팅 서비스 제공
            </li>
            <li className={styles.s}>타 어플의 학생증 인증 과정의 위조 또는 대리 인증 가능성을 보완하기 위해 대학 이메일 인증 라이브러리 활용.</li>

            <li>어플리케이션 내에서 미팅 매칭 및 채팅 서비스 제공</li>
            <li className={styles.s}>매칭이 성사된 후 카카오톡 오픈채팅방으로 넘어가야하는 기존 어플과 달리, 매칭 후에도 우리 서비스 이용을 지속할 수 있도록 설계</li>
            <li>멤버십 결제 혜택을 활용한 수익구조</li>
            <li className={styles.s}>유저가 멤버십 결제를 해야만 다른 유저의 프로필 사진을 확인할 수 있도록 설계하여 과금 유도</li>
          </ul>
        </div>
        <div className={`${styles.desBox}`}>
        <h3>roles 
        & responsibilities </h3>
        <ul className={styles.desList}>
          <li>회의 주도 및 프로젝트의 방향성 제시</li>
          <li>파트 별 업무 분배 및 진행 상황 체크</li>
          <li>전반적인 프로토타입 및 UI, 컴포넌트 설계</li>
        </ul>
        </div>
       
        <div className={`${styles.desBox}`}>
        <h3>tasks 
        & contributions </h3>
        <ul className={styles.desList}>
          <li>매칭 프로세스 구현</li>
          <li className={styles.s}>[매칭 신청 → 수락 또는 거절 → 매칭 성사 또는 실패]의 과정을 
          상태관리</li>
          <li className={styles.s}>매칭 신청시 INVITED 상태의 group_matching_history 
          엔터티 생성</li>
          <li className={styles.s}>매칭 수락시 MATCHED 로 상태 변경 후 채팅방 생성</li>
          <li className={styles.s}>매칭 거절시 DENIED 로 상태 변경, 재신청 불가능하도록 처리</li>
          <li className={styles.s}>매칭 수락/채팅방 생성 후 채팅방 삭제시 CLOSED 로 상태 변경</li>
          <li className={styles.s}>매칭 상태에 따른 UI 랜더링</li>
          <li>익명 게시판 구현</li>
          <li className={styles.s}>익명 게시판 글쓰기, 글 수정, 글 삭제 등 기본적인 CRUD 구현</li>
          <li className={styles.s}>유저 당 30분에 한번씩 조회수 상승하도록 구현</li>
        </ul>
        </div>
        <div className={`${styles.desBox}`}>
        <h3>issues 
        & resolutions </h3>
        <ul className={styles.desList}>
          <li>매칭이 성사된 두 그룹과 대응되는 매칭 신청 리스트 처리에대한 설계 부족으로 이미 매칭이 성사된 그룹에 또 다른 그룹이 매칭을 신청하는 문제 발생 </li>
          <li className={styles.b}>유스케이스 재정비 후 이미 매칭된 그룹에 대한 매칭신청 불가하도록 처리했다.</li>
          <li>매칭 성사후 채팅방 생성 및 삭제까지 이루어진 그룹에 대한 처리 부재 </li>
          <li className={styles.b}>group_matching_history 엔터티에 CLOSED라는 상태 추가 및 모든 매칭 기능이 종료된 상태 구현</li>
          <li>Repository 클래스 내에서 다른 엔터티의 Repository를 호출하는 과정에서 순환 의존성이 발생하여 애플리케이션 구동 시점에BeanCurrentlyInCreationException 또는 StackOverflowError 등의 예외가 발생</li>
          <li className={styles.b}>Repository 간의 직접적인 의존성을 제거하고, 서비스 계층에서 처리하도록 리팩토링했다.</li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
