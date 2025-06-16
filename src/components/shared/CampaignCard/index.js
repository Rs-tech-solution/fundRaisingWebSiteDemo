"use client";

import React from "react";
import styles from "./CampaignCard.module.scss";
import ProgressBar from "../progressbar";
import { useRouter } from "next/navigation";

const CampaignCard = ({ campaigns }) => {
  const progress = (
    (campaigns.procuredAmount / campaigns.requiredAmount) *
    100
  ).toFixed(2);
  const today = new Date();
  const campaignEndDate = new Date(campaigns.endDate);
  const timeDiff = campaignEndDate.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const router = useRouter();
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={campaigns.imageSrc} />
        <div className={styles.overlay}></div>
        <div className={styles.title}>{campaigns.title}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.donorInfo}>
          <button>
            {campaigns.donorsCount ? campaigns.donorsCount : 0} donors
          </button>
          <button>{daysLeft > 0 ? daysLeft : "0"} Days Left</button>
        </div>
        {/* <div className={styles.progressBar}>
          <div
            className={styles.progress}
            // style={{ width: `${progressBarWidth}%` }}
            style={{ width: "50%" }}
          ></div>
        </div> */}
        <ProgressBar progress={progress} />
        <div className={styles.donationInfo}>
          <p className={styles.totalDonation}>{progress + "%"}</p>
          <p className={styles.targetAmount}>
            raised out of {campaigns.requiredAmount}
          </p>
        </div>
        <button
          className={styles.donateBtn}
          onClick={() => router.push(`/campaignDetail/${campaigns.code}`)}
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default CampaignCard;
