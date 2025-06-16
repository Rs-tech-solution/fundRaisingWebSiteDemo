"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./landingPage.module.scss";

const LandingCard = ({ image, title, text, isImageRight }) => {
  return (
    <div
      className={styles.container}
      // style={{
      //   maxWidth: "1150px",
      //   backgroundColor: "rgba(255, 255, 255, 1)",
      //   margin: "20px auto",
      // }}
    >
      <div className="card-container mx-auto overflow-hidden shadow rounded ">
        <div
          className={`row g-2 align-items-center ${
            isImageRight ? "flex-md-row-reverse" : ""
          }`}
        >
          <div className="col-md-5 p-0">
            <img
              src={image}
              className={`${isImageRight ? "rounded-end" : "rounded-start"} ${
                styles.image
              }`}
              alt="Card"
            />
          </div>

          <div
            className={`col-md-7 py-4 py-md-5 px-md-1 text-center text-md-start ${
              isImageRight ? "ps-md-5" : "pe-md-5"
            }`}
            style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
          >
            <h5 className={styles.title}>{title}</h5>
            <p className={styles.text}>{text}</p>
            <button className={styles.btn}>Support</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
