"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./OurMission.module.scss";

const OurMission = () => {
  return (
    <div
      className={`card-container mx-auto overflow-hidden  rounded ${styles.container}`}
    >
      <div className="d-flex flex-column align-items-center justify-content-center gap-4 mb-2">
        <img
          src="/slidesImages/ourmisssion.png"
          width={300}
          className={`img-fluid object-fit-contain rounded ${styles.image}`}
          alt="Card"
        />
        <div className="d-flex flex-column align-items-center justify-content-center gap-2 px-4">
          <h4 className={styles.title}>Our Mission</h4>
          <p className={styles.text}>
            Welcome to Fundraising, a beacon of hope and renewal for the
            timeless traditions of Sanatana Dharma. Our Foundation is built upon
            the belief that the prosperity of Temples, Dharamshalas, Goshalas,
            and Pathshalas - the four pillars - forms the cornerstone of
            our cultural heritage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
