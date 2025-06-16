import React from "react";
import styles from "./card.module.scss";

const ReviewCard = ({ reviews }) => {
  return (
    <div className={styles.review_card}>
      <div className={styles.stars}>{<span>{reviews.rating}</span>}★★★★☆</div>

      <p className={styles.review_text}>{reviews.text}</p>

      <div className={styles.user_info}>
        <img src={reviews.image} alt="User" />
        <span className={styles.user_name}>{reviews.name}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
