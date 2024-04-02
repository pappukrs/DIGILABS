"use client"


import styles from "./page.module.css";

// pages/index.js
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Header from './components/Header';

const NotificationButton = dynamic(() => import('./components/NotificationButton'), { ssr: false });
const NotificationIcon = dynamic(() => import('./components/NotificationIcon'),  { ssr: false });

const Home = () => {

  const [circles, setCircles] = useState([]);

  const handleSendNotification = () => {
    const newCircles = [...circles];
    newCircles.push({ radius: 20, color: 'red' });
    setCircles(newCircles);

    // Remove the circle after 5 seconds
    setTimeout(() => {
      setCircles(circles.filter((_, index) => index !== 0));
    }, 5000);
  };

  return (
    <div >
      <Header/>
      <NotificationIcon circles={circles} />
      <NotificationButton onClick={handleSendNotification} />
    </div>
  );
};

export default Home;
