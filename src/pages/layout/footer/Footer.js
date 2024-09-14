import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
    <p><a href='https://github.com/munmimi'>https://github.com/munmimi</a></p>
    <p>m_mimi@naver.com</p>
    <p>010 9078 1885</p>
  </footer>
  );
};

export default Footer;