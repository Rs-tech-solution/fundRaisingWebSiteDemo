import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./swiperCrousel.module.scss";
import { useResponsive } from "@/context/useResponsive";
import { useRouter } from "next/navigation";

const CarouselComponent = ({ images = [] }) => {
  const router = useRouter();
  const { isSmScreen } = useResponsive();
  return (
    <div className={styles.carouselContainer}>
      {images.length > 0 ? (
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1.2}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // navigation={true}
          className={styles.swiper}
          breakpoints={{
            768: { slidesPerView: 1 },
            992: { slidesPerView: 1.5 },
            1200: { slidesPerView: 1.5 },
          }}
          style={{
            // "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "rgba(169, 42, 4, 1)",
            // "--swiper-pagination-active-color": "red",
            // "--swiper-pagination-bottom": "20px",
            // "--swiper-scrollbar-color": "#fff",
            // "--swiper-scrollbar-drag-background-color": "#fff",
          }}
        >
          {images.map((item, index) => (
            <SwiperSlide key={item.id} className={styles.carousel_slide}>
              <div className={styles.carousel_card}>
                <img
                  src={item.imageSrc}
                  alt={`Slide ${index + 1}`}
                  className={styles.carousel_image}
                />
                <div className={styles.overlay}></div>
                <div className={styles.carousel_caption_overlay}>
                  <h5 className={styles.title}>{item.title}</h5>
                  <p className={styles.caption}>{item.shortDesc}</p>
                  <button
                    className={styles.donateBtn}
                    onClick={() => router.push(`/campaignDetail/${item.code}`)}
                  >
                    Donate
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        ""
      )}
      <div className="custom-pagination"></div>
    </div>
  );
};

export default CarouselComponent;
