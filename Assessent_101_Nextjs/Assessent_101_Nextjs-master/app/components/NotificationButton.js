
"use client";
import React from 'react';
import styles from './NotificationButton.module.css'; 
import throttle from 'lodash.throttle';

const NotificationButton = ({ onClick }) => {

  const throttledOnClick = throttle(onClick, 1000); 
  return (
    <button className={styles.notificationButton} onClick={ throttledOnClick }>Send Notification</button>
  );
};

export default NotificationButton;
