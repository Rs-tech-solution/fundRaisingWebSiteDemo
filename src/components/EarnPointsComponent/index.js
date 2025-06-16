import React from "react";
import styles from "./earnPoints.module.scss";
import EarnPointsCard from "../earnPointCard";
import CustomSwiper from "../shared/customSwiper";

const cards = [
  {
    id: 1,
    desc: "Make a online Donation",
    src: "/slidesImages/earnCardImage.png",
    tag: "100 Coins",
  },
  {
    id: 2,
    desc: "Donated Clothes",
    src: "/slidesImages/earnCardImage2.png",
    tag: "50 Coins",
  },
  {
    id: 3,
    desc: "Refer a Friends",
    src: "/slidesImages/earnCardImage3.png",
    tag: "150 Coins",
  },
  {
    id: 4,
    desc: "Helped house help",
    src: "/slidesImages/earnCardImage.png",
    tag: "150 Coins",
  },
  {
    id: 5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "/slidesImages/earnCardImage2.png",
    tag: "150 Coins",
  },
  {
    id: 6,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "/slidesImages/earnCardImage3.png",
    tag: "150 Coins",
  },
];

const EarnPointsComponent = () => {
  return (
    <div className={styles.earnPointWrappers}>
      {/* <h3 className={styles.h3}>Earn Points</h3>
      <p className={styles.p}>
        Log your good turns, earn coins & do more good deeds!
      </p> */}

      {/* <div className={styles.earnPointContainer}>
        {cards.map((card, index) => (
          <EarnPointsCard
            item={card}
            key={index}
            cardClassName={styles.card}
            imageClassName={styles.cardImage}
            overlayClassName={styles.cardOverlay}
            detailClassName={styles.cardDetail}
            buttonClassName={styles.cardButton}
            tagClassName={styles.cardTag}
            descClassName={styles.cardDesc}
          />
        ))}
      </div> */}

      <CustomSwiper
        slidesPerView={3}
        loop={true}
        spaceBetween={20}
        showDots={true}
        swiperClassName={styles.swiperContainer}
        paginationColor="#F4F4FC"
        activePaginationColor="#A92A04"
        breakpoints={{
          768: { slidesPerView: 3.5, spaceBetween: 10 },
          1024: { slidesPerView: 3.5, spaceBetween: 10 },
          1200: { slidesPerView: 3.5, spaceBetween: 10 },
        }}
      >
        {cards.map((card, index) => (
          <EarnPointsCard
            item={card}
            key={index}
            cardClassName={styles.card}
            imageClassName={styles.cardImage}
            overlayClassName={styles.cardOverlay}
            detailClassName={styles.cardDetail}
            buttonClassName={styles.cardButton}
            tagClassName={styles.cardTag}
            descClassName={styles.cardDesc}
          />
        ))}
      </CustomSwiper>
    </div>
  );
};

export default EarnPointsComponent;
