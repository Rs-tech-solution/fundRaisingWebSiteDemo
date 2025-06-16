"use client";
import React from "react";
// import styles from "./CurrencySelector.module.scss";

const CurrencySelector = ({ currency, setCurrency }) => {
  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
      // className={styles.currencySelector}
    >
      <option value="INR">₹ INR</option>
      <option value="USD">$ USD</option>
      <option value="EUR">€ EUR</option>
      <option value="GBP">£ GBP</option>
    </select>
  );
};

export default CurrencySelector;
