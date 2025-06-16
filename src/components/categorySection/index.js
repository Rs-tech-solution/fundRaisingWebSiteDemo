"use client";
import styles from "./CategorySection.module.scss";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CategorySection = ({
  category = [],
  categories = [],
  selectedCategory = "All",
  setSelectedCategory,
}) => {
  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.category_container}>
      {categories.length > 0 ? (
        <>
          <Swiper
            modules={[Pagination, Navigation]}
            slidesPerView={3}
            spaceBetween={20}
            // centeredSlides={true}
            // loop={true}
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: false,
            // }}
            // pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // navigation={true}
            className={styles.swiper}
            breakpoints={{
              768: { slidesPerView: 3 },
              992: { slidesPerView: 7 },
              1200: { slidesPerView: 7 },
            }}
            style={{
              // "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
              "--swiper-pagination-active-color": "red",
              "--swiper-pagination-bottom": "10px",
              "--swiper-scrollbar-color": "#fff",
              "--swiper-scrollbar-drag-background-color": "#fff",
            }}
          >
            <SwiperSlide className={styles.carousel_slide}>
              <div
                className={`${styles.category_card} ${
                  selectedCategory == "All" ? styles.activeCategory : ""
                }`}
                onClick={() => handleClick("All")}
              >
                <img
                  src={"/slidesImages/categoryicon1.png"}
                  alt={`Slide ${1}`}
                  className={styles.carousel_image}
                />
                <div className={styles.hover_line}></div>
                <h3 className={styles.name}>{"All"}</h3>
              </div>
            </SwiperSlide>

            {categories.map((item, index) => {
              const image = category[index % category.length];
              return (
                <SwiperSlide
                  key={item.categoryId}
                  className={styles.carousel_slide}
                >
                  <div
                    className={`${styles.category_card} ${
                      selectedCategory == item.categoryName
                        ? styles.activeCategory
                        : ""
                    }`}
                    onClick={() => handleClick(item.categoryName)}
                  >
                    <img
                      src={image.image}
                      alt={`Slide ${index + 1}`}
                      className={styles.carousel_image}
                    />
                    <div className={styles.hover_line}></div>
                    <h3 className={styles.name}>{item.categoryName}</h3>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default CategorySection;
