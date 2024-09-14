import React, { useState } from "react";
import styles from "./Profile.module.scss";
import ProfileInfoList from "./ProfileInfoList";

const Profile = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(2);
  };

  const infoData = [
    {
      title: "profile",
      content: [
        { text: "1996.09.25 출생", icon: "lnr-heart" },
        { text: "포항예술고등학교 졸업", icon: "lnr-leaf" },
        { text: "건국대학교 졸업", icon: "lnr-briefcase" },
        { text: "현대미술 전공", icon: "lnr-flag" },
      ],
    },
    {
      title: "contact",
      content: [
        { text: "01090781885", icon: "lnr-phone-handset" },
        { text: "m_mimi@naver.com", icon: "lnr-envelope" },
        { text: "mun.mimi925@gmail.com", icon: "lnr-envelope" },
        { text: "https://github.com/munmimi", icon: "lnr-link" },
      ],
    },
    {
      title: "introduce",
      content: [
        {text:"안녕하세요!"},
        {text:"팀과 함께 문제를 해결하고, 함께 성장하고 싶은 신입 개발자 <b>문지은</b>입니다."},
        {text:"저는 개발 과정을 공유하며 <b>소통</b>하는 것을 좋아합니다."},
        {text:"문제 상황에서 망설임이나 두려움 보다는 빠르게 <b>최선의 해결방법</b>을 모색합니다."},
        {text:"다른 개발자가 보아도 <b>쉽게 이해하고 수정할 수 있는 코드</b>가 좋은 코드라고 생각합니다."},
        {text:"내가 작성하지 않은 코드를 파악하고 수정하는 것도 공부라고 생각하고 <b>유연하게 대처</b>하려고 노력합니다."}
      ],
    },
  ];

  return (
    <div className={styles.profileWrap}>
      <ul className={styles.infoList}>
        {infoData.map((section, index) => (
          <ProfileInfoList
            key={index}
            className={activeIndex === index ? styles.isActive : ""}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            section={section}
            styles={styles}
          />
        ))}
      </ul>
      <p className={styles.img}></p>
    </div>
  );
};

export default Profile;
