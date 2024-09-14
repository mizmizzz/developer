import React from 'react';
import Profile from './components/profile/Profile';
import SkillsSpirits from './components/skillsSpirits/SkillsSpirits';
import Projects from './components/projects/Projects';

const Main = () => {
  return (
    <div>
      <Profile/>
      <SkillsSpirits/>
      <Projects/>
    </div>
  );
};

export default Main;