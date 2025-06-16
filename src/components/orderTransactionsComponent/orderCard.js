import React from "react";
import styles from "./card.module.scss";

const OrderCard = ({ item, on80GApply }) => {
  return (
    <div className={styles.order_card}>
      <div className={styles.order_card_header}>
        <div>
          <p className={styles.label}>Order Placed</p>
          <p className={styles.value}>{item.order_placed_date}</p>
        </div>
        <div className={styles.order_amount}>
          <p className={styles.label}>Total</p>
          <p className={styles.value}>{item.amount}</p>
        </div>
        <div className={styles.order_card_order_id}>
          <p className={styles.label}>Order No. {item.order_no}</p>
          <p className={`${styles.value} ${styles.view_order_detail}`}>
            View Order Details
          </p>
        </div>
      </div>

      <div className={styles.order_card_body}>
        <div className={styles.order_card_imageSection}>
          <div className={styles.order_card_image}>
            <img src={item.img} alt={item.img} />
          </div>
          <div className={styles.order_card_details}>
            <h3>{item.title}...</h3>
            <p className={styles.location}>
              Location: <span>{item.location}</span>
            </p>
            <div className={styles.amounts}>
              <div className={styles.label}>
                <p>Donation Amount</p>
                <p>Give Tip – {item.tip}%</p>
              </div>
              <div className={styles.value}>
                <p>{item.donation_amount}</p>
                <p>{item.tip_amount}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.order_card_action}>
          {/* <button className={styles.btn}>Download Invoice</button> */}
          <select>
            {/* <option value="" disabled>
              Select a option
            </option> */}
            <option value="">Share Certificate</option>
            <option value="">Download Invoice</option>
          </select>
          <button
            className={`${styles.btn} ${styles.secondary}`}
            onClick={on80GApply}
          >
            Apply 80G
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
