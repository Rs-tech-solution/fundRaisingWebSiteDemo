"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./monthlyCampaign.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import MonthlyCampaignCard from "./monthlyCampaignCard";


const MonthlyCampaign = ({ campaigns }) => {
  const preRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = preRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();

      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);

      swiper.on("slideChange", () => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Monthly Campaigns</h2>
        <p>
    Create sustained impact. Support verified projects. Get regular updates. Save tax. Cancel anytime.
        </p>
      </div>
      <div className={styles.wrapper}>
        <button
          ref={preRef}
          className={`${styles.navBtn} ${isBeginning ? styles.disabled : ""}`}
          disabled={isBeginning}
        >
          <FaArrowLeft />
        </button>

        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              prevEl: preRef.current,
              nextEl: nextRef.current,
            }}
            className={styles.swiper}
            onInit={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
          >
            {campaigns.map((campaign, index) => (
              <SwiperSlide key={index}>
                <MonthlyCampaignCard campaigns={campaign} cardClassName={styles.monthlyCampCard} imageClassName={styles.monthlyCampImage} infoClassName={styles.monthlyCampInfo} titleClassName={styles.monthlyCampTitle} buttonClassName={styles.monthlyCampBtn} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button
          ref={nextRef}
          className={`${styles.navBtn} ${isEnd ? styles.disabled : ""}`}
          disabled={isEnd}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default MonthlyCampaign;
