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
          <NavLink to="/" />
        </p>
        <button className={active ? `${styles.navBtn}` : `${styles.isActive} ${styles.navBtn}`} onClick={onClickHandler}>
          <span className={styles.path}></span>
          <span className={styles.path}></span>
        </button>
      </div>
      <nav className={active ? `${styles.navi}` : `${styles.navi} ${styles.isActive}`}>
        <NavLink to="/"className={({ isActive }) => isActive && styles.active}>Introduce</NavLink>
        <NavLink to="/calendar" className={({ isActive }) => isActive && styles.active}>calendar</NavLink>
        <NavLink to="/dummy" className={({ isActive }) => isActive && styles.active }>dummy</NavLink>
      </nav>
    </header>
  );
};

export default Header;
