import React, { FunctionComponent } from "react";

import classnames from "classnames";
import styles from "./LightboxModal.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper";

import { PrevIcon, NextIcon, CloseIcon } from "../../components/icons";

interface LightboxModalProps {
  show: boolean;
  activeSlide: string;
  closeModal: () => void;
}

const LightboxModal: FunctionComponent<LightboxModalProps> = ({
  show,
  activeSlide,
  closeModal,
}: LightboxModalProps) => {
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

  if (!show) return null;

  return (
    <div
      className={classnames(styles.lightboxModal__container, {
        [styles.lightboxModal__container__show]: show,
      })}
    >
      <div className={styles.lightboxModal__content}>
        <button
          onClick={closeModal}
          className={styles.lightboxModal__closeButton}
        >
          <CloseIcon height="20" width="20" color="#fff" />
        </button>
        <Swiper
          initialSlide={parseInt(activeSlide, 10)}
          slidesPerView={1}
          modules={[Navigation, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          navigation={{
            prevEl: "#swiper__lightbox__nav-prev",
            nextEl: "#swiper__lightbox__nav-next",
          }}
          pagination={{
            el: "#swiper__lightbox__pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return `<button class="${className}"><img src=${images_thumbnail[index]} alt="" /></button>`;
            },
          }}
          loop={true}
          className={styles.lightboxModal__swiper}
        >
          {images.map((image: string) => (
            <SwiperSlide className={styles.lightboxModal__slide} key={image}>
              <img src={image} alt="" />
            </SwiperSlide>
          ))}

          <button
            id="swiper__lightbox__nav-prev"
            className={styles.lightboxModal__nav}
          >
            Prev
          </button>
          <label
            htmlFor="swiper__lightbox__nav-prev"
            className={styles.lightboxModal__nav__prev}
          >
            <PrevIcon />
          </label>
          <label
            htmlFor="swiper__lightbox__nav-next"
            className={styles.lightboxModal__nav__next}
          >
            <NextIcon />
          </label>
          <button
            id="swiper__lightbox__nav-next"
            className={styles.lightboxModal__nav}
          >
            Next
          </button>
          <div
            id="swiper__lightbox__pagination"
            className={styles.lightboxModal__pagination}
          />
        </Swiper>
      </div>
    </div>
  );
};

export default LightboxModal;
