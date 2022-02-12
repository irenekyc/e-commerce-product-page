import React, { FunctionComponent, useRef } from "react";
import { Navigation, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import styles from "./ProductImageSwiper.module.scss";
import { PrevIcon, NextIcon } from "../icons";

const ProductImageSwiper: FunctionComponent = () => {
  const paginationRowRef = useRef<HTMLDivElement | null>(null);
  const images = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];
  const images_thumbnail = [
    "/images/image-product-1-thumbnail.jpg",
    "/images/image-product-2-thumbnail.jpg",
    "/images/image-product-3-thumbnail.jpg",
    "/images/image-product-4-thumbnail.jpg",
  ];
  return (
    <Swiper
      slidesPerView={1}
      modules={[Navigation, Pagination, EffectFade]}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      navigation={{
        prevEl: "#swiper__sneakers__nav-prev",
        nextEl: "#swiper__sneakers__nav-next",
      }}
      pagination={{
        el: "#swiper-sneakers-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return `<button class="${className}"><img src=${images_thumbnail[index]} alt="" /></button>`;
        },
      }}
      loop={true}
      className={styles.productImageSwiper__container}
    >
      {images.map((image: string) => (
        <SwiperSlide className={styles.productImageSwiper__slide} key={image}>
          <img src={image} alt="" />
        </SwiperSlide>
      ))}
      <div
        id="swiper-sneakers-pagination"
        className={styles.productImageSwiper__pagination__row}
        ref={paginationRowRef}
      />

      <button
        id="swiper__sneakers__nav-prev"
        className={styles.productImageSwiper__nav}
      >
        Prev
      </button>
      <label
        htmlFor="swiper__sneakers__nav-prev"
        className={styles.productImageSwiper__nav__prev}
      >
        <PrevIcon />
      </label>
      <label
        htmlFor="swiper__sneakers__nav-next"
        className={styles.productImageSwiper__nav__next}
      >
        <NextIcon />
      </label>
      <button
        id="swiper__sneakers__nav-next"
        className={styles.productImageSwiper__nav}
      >
        Next
      </button>
    </Swiper>
  );
};

export default ProductImageSwiper;
