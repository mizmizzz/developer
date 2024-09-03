import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <p className={styles.logo}>
          <NavLink to="/" />
        </p>
        <button className={styles.navBtn}>
          <span className="path"></span>
          <span className="path"></span>
        </button>
      </div>
      <nav></nav>
    </header>
  );
};

export default Header;
