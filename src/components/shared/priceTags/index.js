import React from "react";
import styles from "./pricetag.module.scss";

const PriceTags = ({
  activeTabPrice,
  setActiveTabPrice,
  handlePriceTagClick,
  donationAmount,
  setDonationAmount,
  currency,
  priceArray,
  handleCart,
  paymentButtonClassName,
  mostSelected,
  totalDonation,
  inputOnChange,
}) => {
  const currencySymbols = {
    INR: "₹",
    USD: "$",
    EUR: "€",
    GBP: "£",
  };
  return (
    <>
      <div className={styles.priceTags}>
        {activeTabPrice !== "others" && (
          <>
            {priceArray.map((amount) => (
              <div
                className={`${styles.priceTag} ${
                  activeTabPrice == amount ? styles.activePriceTag : ""
                }
                
                 `}
                key={amount}
                onClick={() => {
                  handlePriceTagClick(amount);
                  setActiveTabPrice(amount);
                }}
              >
                {mostSelected == amount && (
                  <span className={styles.most_selected}>most selected</span>
                )}
                <span>
                  {currencySymbols[currency]}
                  {amount}
                </span>
              </div>
            ))}
            <div
              className={`${styles.priceTag} ${
                activeTabPrice == "others" ? "styles.activePriceTag" : ""
              }`}
              onClick={() => {
                handlePriceTagClick("others");
                setActiveTabPrice("others");
              }}
            >
              <span>others</span>
            </div>
          </>
        )}
      </div>
      {activeTabPrice == "others" && (
        <input
          className={styles.input}
          type="number"
          value={donationAmount}
          // onChange={(e) => setDonationAmount(e.target.value)}
          onChange={(e) => inputOnChange(e)}
          placeholder="Enter amount"
        />
      )}
      <button
        className={`${styles.paymentButton} ${paymentButtonClassName}`}
        onClick={() => handleCart()}
      >
        Donate {totalDonation}
      </button>
    </>
  );
};

export default PriceTags;
