import React from 'react';
import styles from './SkillsSpirits.module.scss'
import SpiritsSwiper from './SpiritsSwiper';
import SkillsSlide from './SkillsSlide';
import SpiritsScrTrigger from './SpiritsScrTrigger';

const SkillsSpirits = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.skillsWrap}>
      <h2>Skills</h2>

      <SkillsSlide/>

      </div>
      <div className={styles.spiritsWrap}>
        {/* <SpiritsSwiper/> */}
        <SpiritsScrTrigger/>
      </div>

      
    </div>
  );
};

export default SkillsSpirits;