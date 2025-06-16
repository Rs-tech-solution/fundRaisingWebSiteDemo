"use client";
import React, { useEffect, useRef, useState } from "react";
import CampaignCard from "@/components/shared/CampaignCard";
import styles from "./Review.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ApiService from "@/services/ApiService";
import { useResponsive } from "@/context/useResponsive";
import ReviewCard from "./ReviewCard";

const apiService = new ApiService();

const ReviewSection = ({ reviews }) => {
  const preRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const { isSmScreen } = useResponsive();

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
    <>
      <div className={styles.campaignSwiperContainer}>
        <div className={styles.campaignContainer}>
          <div className={styles.campaignListingHeader}>
            <h2>What Our Customer Say About Us</h2>
          </div>
          <div className={styles.navigationBtn}>
            <button
              ref={preRef}
              className={`${styles.navBtn} ${
                isBeginning ? styles.disabled : ""
              }`}
              disabled={isBeginning}
            >
              <FaArrowLeft />
            </button>
            <button
              ref={nextRef}
              className={`${styles.navBtn} ${isEnd ? styles.disabled : ""}`}
              disabled={isEnd}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[Navigation]}
            slidesPerView={1.2}
            spaceBetween={10}
            centeredSlides={true}
            loop={true}
            navigation={{
              prevEl: preRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              768: { slidesPerView: 1.2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
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
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                {/* <CampaignCard campaigns={campaign} /> */}
                <ReviewCard reviews={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ReviewSection;
