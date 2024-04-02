import React, { useState } from 'react';
import styles from './NotificationIcon.module.css'; 

const NotificationIcon = ({ circles }) => {

  console.log("circles--",circles)
 

  return (
    <div className={styles.notificationiconContainer}>
    <div className={styles.notificationicon}>
      <img src="https://img.icons8.com/ios/50/appointment-reminders--v1.png" alt="appointment-reminders--v1"/>
      {circles?.map((circle, index) => (
        <div
          key={index}
          className={styles.circle}
          style={{ backgroundColor: circle.color, width: circle.radius * 2, height: circle.radius * 2 }}
        ></div>
      ))}
    </div>
    </div>
  );
};

export default NotificationIcon;
