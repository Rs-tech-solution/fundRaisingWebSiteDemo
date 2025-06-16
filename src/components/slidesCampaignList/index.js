'use client';

import React from 'react';
import styles from './slidesCampaignList.module.scss';
import MonthlyCampaignCard from "../monthlyCampaign/monthlyCampaignCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SlidesCampaignList = ({campaigns}) => {
  return (
    <div className={styles.campignListing}>
    <h3 className={styles.head}>
      How your contribution makes a difference
    </h3>
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className={styles.swiper}
        breakpoints={{
          768: { slidesPerView: 1 },
          992: { slidesPerView: 2 },
          1200: { slidesPerView: 2 },
        }}
        style={{
          "--swiper-pagination-color": "rgba(169, 42, 4, 1)",
        }}
      >
        {campaigns.map((campaign, index) => (
          <SwiperSlide key={index} className={styles.carousel_slide}>
            <MonthlyCampaignCard
              campaigns={campaign}
              cardClassName={styles.slideCampCard}
              imageClassName={styles.slideCampImage}
              infoClassName={styles.slideCampInfo}
              descriptionClassName={styles.slidesCampDesc}
              titleClassName={styles.slideCampTitle}
              buttonClassName={styles.slideCampBtn}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination"></div>
    </div>
  </div>
  )
}

export default SlidesCampaignList