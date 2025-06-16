"use client";
import React from "react";
import styles from "./personaldetails.module.scss";

const PersonalDetails = ({
  name,
  setName,
  email,
  setEmail,
  country,
  setCountry,
  mobile,
  setMobile,
  pan,
  setPan,
  donorType,
  setDonorType,
}) => {
  return (
    <div className={styles.personalDetails}>
      <div className={styles.inputGroup}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </label>
      </div>
      <div className={styles.inputGroup}>
        <label>
          Email Id:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </label>
      </div>
      <div className={styles.inputGroup}>
        <div className={styles.selectOptions}>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="IND">India</option>
            <option value="US">United States</option>
            <option value="EUR">Europe</option>
            <option value="GBP">United Kingdom</option>
          </select>
        </div>
        <input
          type="number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Mobile number 9124343..."
        />
      </div>
      <div className={styles.buttons}>
        <button
          className={donorType === "Indian" ? styles.active : ""}
          onClick={() => setDonorType("Indian")}
        >
          Indian Donor
        </button>
        <button
          className={donorType === "Foreign" ? styles.active : ""}
          onClick={() => setDonorType("Foreign")}
        >
          Foreign Donor
        </button>
      </div>
      {/* pan card block */}
      {/* <div className={styles.inputGroup}>
        <label>
          PAN No *:
          <input
            type="text"
            value={pan}
            onChange={(e) => setPan(e.target.value)}
            placeholder="Enter your PAN number"
          />
        </label>
        <span className={styles.panNote}>
          Please enter PAN as per Indian government rules
        </span>
      </div> */}
    </div>
  );
};

export default PersonalDetails;
