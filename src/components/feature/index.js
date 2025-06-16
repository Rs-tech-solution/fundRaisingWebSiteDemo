import React from "react";
import styles from "./feature.module.scss";

const features = [
  {
    title: "Donations",
    description: "Log your good turns, earn coins & do more good deeds!",
    buttonText: "Explore to Donate",
    image: "/slidesImages/feature1.png",
  },
  {
    title: "Pujas",
    description: "Looks like you haven’t opted for any puja yet.",
    buttonText: "Explore Pujas",
    image: "/slidesImages/feature2.png",
  },
];

const FeatureCard = () => {
  return (
    <div className={styles.feature_card_container}>
      {features.map((feature, index) => (
        <div className={styles.feature_card} key={index}>
          <div className={styles.feature_content}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <button className={styles.cta_button}>{feature.buttonText}</button>
          </div>
          <div className={styles.feature_image}>
            <img src={feature.image} alt={feature.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
