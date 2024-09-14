import React from "react";

const ProfileInfoList = ({ section, className, onMouseEnter, onMouseLeave, styles }) => {
  return (
    <li
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <p className={styles.title}>{section.title}</p>
      <div className={styles.text}>
        {section.content.map((item, i) => (
          <p key={i}>
            <span dangerouslySetInnerHTML={{ __html: item.text }} />
            {item.icon && (
              <b className={styles.icon}>
                <span className={`lnr ${item.icon}`}></span>
              </b>
            )}
          </p>
        ))}
      </div>
    </li>
  );
};

export default ProfileInfoList;
