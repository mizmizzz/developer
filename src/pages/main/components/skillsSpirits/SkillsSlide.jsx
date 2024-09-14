import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './SkillsSlide.module.scss';



const SkillsSlide = () => {
  const skillList = [
    {
      classi: "Front End",
      skills: ["HTML5", "CSS3", "SASS/SCSS", "JavaScript", "AJAX", "JSP", "ReactJS"]
    },
    {
      classi: "Back End",
      skills: ["JAVA", "SpringBoot", "JPA", "MyBatis"]
    },
    {
      classi: "Dev Ops",
      skills: ["MySQL", "MariaDB", "AWS"]
    },
    {
      classi: "Collaboration Tools",
      skills: ["GIT", "GitHub", "Figma", "Discord", "Notion"]
    },
  ];

  return (
    <ul className={styles.list}>
      {skillList.map((skill,index)=>{
        return(<li key={index}>
          <h3>{skill.classi}</h3>
          <p>
            {skill.skills.map((skillName,index)=>{
              return(<span key={index}>{skillName}</span>)
            })}
          </p>
        </li>)
      })}
    </ul>
  );
};

export default SkillsSlide;
