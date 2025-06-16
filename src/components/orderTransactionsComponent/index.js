import React, { useState } from "react";
import styles from "./orderTransaction.module.scss";
import OrderCard from "./orderCard";
import Form80G from "../form80G";

const orders = [
  {
    order_no: 123456789,
    order_placed_date: "2023-10-01",
    amount: "₹1000",
    img: "/slidesImages/orderTransactionImage.png",
    title: "Donation to Charity A",
    location: "Hyderabad",
    donation_amount: "₹1000",
    tip: 10,
    tip_amount: "₹100",
  },
  {
    order_no: 987654321,
    order_placed_date: "2023-10-02",
    amount: "₹2000",
    img: "/slidesImages/orderTransactionImage.png",
    title: "Donation to Charity B",
    location: "Bangalore",
    donation_amount: "₹2000",
    tip: 15,
    tip_amount: "₹300",
  },
];

const OrderTransactionsComponent = () => {
  const [visible, setVisible] = useState(false);
  const on80GApply = () => {
    setVisible(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <>
      <div className={styles.order_transaction_container}>
        <h3 className={styles.h3}>Order Transactions</h3>
        <p className={styles.p}>
          Log your good turns, earn coins & do more good deeds!
        </p>
        {orders.map((order, index) => (
          <OrderCard item={order} key={index} on80GApply={on80GApply} />
        ))}
      </div>
      {visible && (
        <>
          <Form80G onClose={() => setVisible(false)} />
        </>
      )}
    </>
  );
};

export default OrderTransactionsComponent;
