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
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ProductImagesType } from "../../typings/Product";

const ProductImageSwiper: FunctionComponent = () => {
  const paginationRowRef = useRef<HTMLDivElement | null>(null);
  const [openLightbox, setOpenLightbox] = useState<boolean>(false);
  const [slideIndex, setSlideIndex] = useState<string>("0");
  const { info: productInfo } = useSelector(
    (state: RootState) => state.product
  );

  const onClickSlide = (e: MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth <= 992) return;

    setOpenLightbox(true);
    setSlideIndex(e.currentTarget.id);
  };

  if (!productInfo) return null;
  const { images } = productInfo;

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
            return `<button class="${className}"><img src=${images[index].thumbnail} alt="" /></button>`;
          },
        }}
        loop={true}
        className={styles.productImageSwiper__container}
      >
        {images.map((image: ProductImagesType, index: number) => (
          <SwiperSlide
            className={styles.productImageSwiper__slide}
            key={`product-image-${index}`}
            onClick={onClickSlide}
            id={index.toString()}
          >
            <img src={image.jpg} alt="" />
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
