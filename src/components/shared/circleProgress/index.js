import React from "react";
import styles from "./CircleProgress.module.scss";

const CircleProgress = ({ percentage = 40, size = 120, stroke = 8 }) => {
  const radius = size / 2 - stroke;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className={styles.circle_loader} style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle
          className={styles.circle_bg}
          stroke="#e6e6e6"
          fill="transparent"
          strokeWidth={stroke}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={styles.circle_progress}
          stroke="#F9A825"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <p className={styles.percentage_text}>{percentage} %</p>
    </div>
  );
};

export default CircleProgress;
