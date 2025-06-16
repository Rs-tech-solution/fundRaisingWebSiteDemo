"use client";
import Card from "./card";
import styles from "../home/home.module.scss";

const CardsBlock = ({ cardsData }) => {
  return (
    <div className={styles.cardsBlock}>
      {cardsData.map((card) => (
        <Card
          key={card.id}
          product={card.product}
          description={card.description}
          id={card.id}
        />
      ))}
    </div>
  );
};
export default CardsBlock;
