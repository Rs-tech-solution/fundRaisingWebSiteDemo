"use client";

import React from "react";
import styles from './missionBanner.module.scss';

const MissionBanner = () => {
  return (
    <div className={styles.mission_banner}>
      <img
        src="/slidesImages/glimps.png"
        alt="Top Left Image"
        className={`${styles.image} ${styles.left_image}`}
      />
      <img
        src="/slidesImages/glimps.png"
        alt="Top Right Image"
        className={`${styles.image} ${styles.right_image}`}
      />
      <img
        src="/slidesImages/glimps.png"
        alt="Bottom Left Image"
        className={`${styles.image} ${styles.bottom_left_image}`}
      />
      <img
        src="/slidesImages/glimps.png"
        alt="Bottom Right Image"
        className={`${styles.image} ${styles.bottom_right_image}`}
      />
      <div className={styles.content_container}>
        <h1>Be a part of Our Mission, Supporting</h1>
        <h2>10,000</h2>
        <h3>Families helped</h3>
        <p>
          Join our mission to ensure those who are in their most vulnerable
          period of their lives receive the support and care they need.
        </p>
        <div className={styles.button_container}>
          <button className={styles.save_stray}>Save a stray</button>
          <button className={styles.spread_word}>Spread the word</button>
        </div>
      </div>
    </div>
  );
};

export default MissionBanner;
