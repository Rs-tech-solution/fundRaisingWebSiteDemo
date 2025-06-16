"use client";

import styles from "./progress.module.scss";

import React from "react";

const ProgressBar = ({
  progress = 50,
  progressBarClassName,
  progressClassName,
}) => {
  const safeProgress = Math.min(Math.max(progress, 0), 100);
  return (
    <div className={`${styles.progressBar} ${progressBarClassName}`}>
      <div
        className={`${styles.progress} ${progressClassName}`}
        style={{ width: `${safeProgress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
