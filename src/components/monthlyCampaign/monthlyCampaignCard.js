"use client";

import React from "react";
import styles from "./card.module.scss";

const MonthlyCampaignCard = ({
  campaigns,
  cardClassName,
  imageClassName,
  infoClassName,
  descriptionClassName,
  titleClassName,
  buttonClassName
}) => {
  return (
    <div className={`${styles.card} ${cardClassName}`}>
      <img
        src={campaigns.image}
        className={`${styles.image} ${imageClassName}`}
      />
      <div className={`${styles.info} ${infoClassName}`}>
        {campaigns.totalDonation && (
          <button className={styles.donationCount}>
            {campaigns.totalDonation} Donation
          </button>
        )}
        <div className={`${styles.title} ${titleClassName}`}>{campaigns.title}</div>
        {campaigns.desc && (
          <div className={`${styles.description} ${descriptionClassName}`}>
            {campaigns.desc}
          </div>
        )}
        <button className={`${styles.donateBtn} ${buttonClassName}`}>Donate Monthly</button>
      </div>
    </div>
  );
};

export default MonthlyCampaignCard;
