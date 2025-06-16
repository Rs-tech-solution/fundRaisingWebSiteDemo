"use client";

import React from "react";
import styles from "./index.module.scss";

const CampaignProject = ({ campaignProject }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Projects</h2>
      <div dangerouslySetInnerHTML={{ __html: campaignProject }} />
    </div>
  );
};

export default CampaignProject;
