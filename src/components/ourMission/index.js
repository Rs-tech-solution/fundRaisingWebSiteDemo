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
          src="/slidesImages/banner1.png"
          className={`img-fluid w-100 h-100 object-fit-cover rounded ${styles.image}`}
          alt="Card"
        />
        <div className="d-flex flex-column align-items-center justify-content-center gap-2 px-4">
          <h4 className={styles.title}>Our Mission</h4>
          <p className={styles.text}>
            Welcome to Veda Sankalpa, a beacon of hope and renewal for the
            timeless traditions of Sanatana Dharma. Our Foundation is built upon
            the belief that the prosperity of Temples, Dharamshalas, Goshalas,
            and Veda Pathshalas - the four pillars - forms the corner
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
