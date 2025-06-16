import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.scss";
import { useResponsive } from "@/context/useResponsive";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CustomSwiper = ({
  children,
  showDots = true,
  loop = false,
  autoplay = false,
  customNavigation = false,
  navigation = false,
  pagination = true,
  slidesPerView = 3,
  spaceBetween = 10,
  breakpoints,
  centeredSlides = false,
  className = "",
  navBtnClassName = "",
  wrapperClassName = "",
  swiperClassName,
  carouselContainerClassName = "",
  paginationColor = "#fff",
  activePaginationColor = "#3b82f6",
}) => {
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
    <div className={`${styles.wrapper}  ${wrapperClassName}`}>
      {customNavigation && (
        <button
          ref={preRef}
          className={`${styles.navBtn} ${
            isBeginning ? styles.disabled : ""
          } ${navBtnClassName}`}
          disabled={isBeginning}
        >
          <FaArrowLeft />
        </button>
      )}
      <div
        className={`${styles.carouselContainer} ${carouselContainerClassName}`}
      >
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          navigation={
            customNavigation
              ? {
                  prevEl: preRef.current,
                  nextEl: nextRef.current,
                }
              : navigation
          }
          autoplay={
            autoplay
              ? {
                  delay: 5000,
                  disableOnInteraction: false,
                }
              : false
          }
          onInit={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          breakpoints={breakpoints}
          centeredSlides={centeredSlides}
          loop={loop}
          pagination={pagination && showDots ? { clickable: true } : false}
          scrollbar={{ draggable: true }}
          className={`${styles.swiper} ${
            showDots ? swiperClassName : ""
          } custom-swiper`}
          style={{
            "--custom-pagination-color": paginationColor,
            "--custom-pagination-active-color": activePaginationColor,
          }}
        >
          {React.Children.map(children, (child, index) => (
            <SwiperSlide key={index} className={styles.carousel_slide}>
              {child}
            </SwiperSlide>
          ))}
        </Swiper>

        {showDots && <div className="custom-pagination"></div>}
      </div>
      {customNavigation && (
        <button
          ref={nextRef}
          className={`${styles.navBtn} ${
            isEnd ? styles.disabled : ""
          }  ${navBtnClassName}`}
          disabled={isEnd}
        >
          <FaArrowRight />
        </button>
      )}
    </div>
  );
};

export default CustomSwiper;
