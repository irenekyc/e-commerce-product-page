import React, { FunctionComponent, useRef, useState, MouseEvent } from "react";
import { Navigation, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import styles from "./ProductImageSwiper.module.scss";
import { PrevIcon, NextIcon } from "../icons";
import LightboxModal from "../../widgets/lightbox-modal/LightboxModal";

const ProductImageSwiper: FunctionComponent = () => {
  const paginationRowRef = useRef<HTMLDivElement | null>(null);
  const [openLightbox, setOpenLightbox] = useState<boolean>(false);
  const [slideIndex, setSlideIndex] = useState<string>("0");
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

  const onClickSlide = (e: MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth <= 992) return;

    setOpenLightbox(true);
    setSlideIndex(e.currentTarget.id);
  };
  return (
    <>
      <LightboxModal
        activeSlide={slideIndex}
        show={openLightbox}
        closeModal={() => setOpenLightbox(false)}
      />
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
        {images.map((image: string, index: number) => (
          <SwiperSlide
            className={styles.productImageSwiper__slide}
            key={image}
            onClick={onClickSlide}
            id={index.toString()}
          >
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
    </>
  );
};

export default ProductImageSwiper;
