"use client";
import React, { useEffect, useRef, useState } from "react";
import CampaignCard from "@/components/shared/CampaignCard";
import styles from "./style.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ApiService from "@/services/ApiService";
import { useResponsive } from "@/context/useResponsive";
import { useRouter } from "next/navigation";

const apiService = new ApiService();

const CampaignList = ({ campaigns = [] }) => {
  const preRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const { isSmScreen } = useResponsive();

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const router = useRouter();

  const handleViewAll = () => {
    router.push("/categorypage");
  };

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
      {!isSmScreen ? (
        <div className={styles.campaignSwiperContainer}>
          <div className={styles.campaignContainer}>
            <div className={styles.campaignListingHeader}>
              <h2>Dharma Protection</h2>
              <p style={{ lineHeight: "100%" }}>
                Uphold the Glory of Sanatana Dharma: Support Temples, Veda
                Pathshalas, Goshalas, Everyday, we strive to make this world a better place. Our commitment towards bringing a change drives us and if you share our passion, come join us.
              </p>
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
            {campaigns.length > 0 ? (
              <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={20}
                centeredSlides={false}
                loop={false}
                navigation={{
                  prevEl: preRef.current,
                  nextEl: nextRef.current,
                }}
                breakpoints={{
                  768: { slidesPerView: 1 },
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
                {campaigns?.map((campaign, index) => (
                  <SwiperSlide key={index}>
                    <CampaignCard campaigns={campaign} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <h4
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                No Campaign Available
              </h4>
            )}
          </div>
          <button className={styles.viewBtn} onClick={handleViewAll}>
            View All Campaigns
          </button>
        </div>
      ) : (
        <div className={styles.campaignSwiperContainer}>
          <div className={styles.campaignContainer}>
            <div className={styles.campaignListingHeader}>
              <h2>Dharma Parirakshana</h2>
              <p className={styles.p}>
                Uphold the Glory of Sanatana Dharma: Support Temples, Veda
                Pathshalas, Goshalas, & Ashrams through your generous donations.
              </p>
            </div>
            <div className={styles.navigationBtn}>
              <button ref={preRef}>
                <FaArrowLeft />
              </button>
              <button ref={nextRef}>
                <FaArrowRight />
              </button>
            </div>
          </div>
          {campaigns.length > 0 ? (
            <>
              <div className={styles.mobileViewListing}>
                {campaigns.map((campaign, index) => (
                  <CampaignCard campaigns={campaign} key={index} />
                ))}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
};

export default CampaignList;

// const [campaignList, setCampaignList] = useState([]);
// const [filterCampaign, setFilterCampaign] = useState([]);

// const fetchFilteredCampaign = async (category) => {
//     try {
//         setCampaignList([]);
//         const response = await apiService.get(`/campaign/filter/category?category=${category}`);
//         setFilterCampaign(response.data);
//     } catch (error) {
//         console.error("Failed to fetch data", error);
//     }
// };

// const fetchCampaignList = async () => {
//     try {
//         const response = await apiService.get("/campaign/active");
//         setCampaignList(response.data);
//     } catch (error) {
//         console.error("Failed to fetch data", error);
//     }
// };

// useEffect(() => {
//     fetchCampaignList();
// }, []);

// useEffect(() => {
//     if (selectedCategory !== '') {
//         fetchFilteredCampaign(selectedCategory);
//     } else {
//         setFilterCampaign([]);
//         fetchCampaignList();
//     }
// }, [selectedCategory])
