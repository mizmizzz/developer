import React, { useState } from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [active, setIsActive] = useState(false);
  const onClickHandler = ()=>{
    setIsActive(!active)
  }
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <p className={styles.logo}>
          {/* <NavLink to="/" /> */}
        </p>
        <button className={active ? `${styles.isActive} ${styles.navBtn}` : `${styles.navBtn}`} onClick={onClickHandler}>
          <span className={styles.path}></span>
          <span className={styles.path}></span>
        </button>
      </div>
      <nav className={active ? `${styles.navi} ${styles.isActive}` : `${styles.navi}`}>
        <NavLink to="/"className={({ isActive }) => isActive && styles.active} onClick={onClickHandler}>Introduce</NavLink>
        <NavLink to="/calendar" className={({ isActive }) => isActive && styles.active} onClick={onClickHandler}>calendar</NavLink>
        <NavLink to="/dummy" className={({ isActive }) => isActive && styles.active } onClick={onClickHandler}>dummy</NavLink>
      </nav>
    </header>
  );
};

export default Header;
