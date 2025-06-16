"use client";

import React from "react";
import styles from "./donorsList.module.scss";

const DonorsList = ({
  donors,
  donorList,
  selectedDonorOption,
  setSelectedDonorOption,
  headClassName,
}) => {
  return (
    <>
      <div className={styles.donorsListcontainer}>
        <h3 className={`${styles.head} ${headClassName}`}>Donors {donors}</h3>
        <div className={styles.donorsListOption}>
          <button
            className={`${styles.donorsFilterBtn} ${
              selectedDonorOption == "recent" ? styles.activeDonorFilter : ""
            }`}
            onClick={() => setSelectedDonorOption("recent")}
          >
            Recent
          </button>
          <button
            className={`${styles.donorsFilterBtn} ${
              selectedDonorOption == "most_generous"
                ? styles.activeDonorFilter
                : ""
            }`}
            onClick={() => setSelectedDonorOption("most_generous")}
          >
            Most Generous
          </button>
        </div>
        <div className={styles.donorsList}>
          {donorList.map((donor, index) => (
            <div className={styles.donorDetail} key={index}>
              <img src={donor.img} />
              <div className={styles.donorPersonalInfo}>
                <div>
                  <h4>{donor.name}</h4>
                  <button>top donation</button>
                </div>
                <p>₹{donor.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.veiwMoreBtn}>
        <button>view more</button>
      </div>
    </>
  );
};

export default DonorsList;
