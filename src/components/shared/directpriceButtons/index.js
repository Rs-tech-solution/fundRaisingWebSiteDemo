"use client";
import React from "react";
import styles from "./index.module.scss";

const PriceTags = ({ handlePriceTagClick, currencySymbols, currency }) => {
  return (
    <div className={styles.priceTags}>
      {[10, 25, 50].map((amount) => (
        <div
          key={amount}
          className={styles.priceTag}
          onClick={() => handlePriceTagClick(amount)}
        >
          <span>
            {currencySymbols[currency]}
            {amount}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PriceTags;
