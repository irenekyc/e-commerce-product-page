import React, { FunctionComponent, useState } from "react";
import ProductImageSwiper from "../../components/product-image-swiper";
import styles from "./ProductDescription.module.scss";
import { ProductType } from "../../typings/Product";
import { CartIcon, MinusIcon, PlusIcon } from "../../components/icons";

const ProductDescription: FunctionComponent = () => {
  const [cartNumber, setCartNumber] = useState<number>(0);
  const product: ProductType = {
    id: "product-1",
    brand: "Sneaker Company",
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
    price: {
      original: 250,
      discount: "50%",
      discounted: 125,
    },
  };

  const minusCartNumber = () => {
    if (cartNumber === 0) return;
    setCartNumber(cartNumber - 1);
  };
  return (
    <section className="product-description__section">
      <ProductImageSwiper />
      <div className={styles.productDescription__text}>
        <h3>{product.brand}</h3>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className={styles.productDescription__priceDiv}>
          <span className={styles.productDescription__price__main}>
            ${product.price.discounted.toFixed(2)}
          </span>
          <div className={styles.productDescription__price__discount}>
            <span>{product.price.discount}</span>
          </div>
          <div className={styles.productDescription__price__cross}>
            {" "}
            <span>${product.price.original.toFixed(2)}</span>
          </div>
        </div>
        <div className={styles.productDescription__cartSwitcherRow}>
          <div className={styles.productDescription__cartSwitcher}>
            <button
              className={styles.productDescription__cartSwitcher__minus}
              onClick={minusCartNumber}
            >
              <MinusIcon />
            </button>
            <span>{cartNumber}</span>
            <button
              className={styles.productDescription__cartSwitcher__plus}
              onClick={() => setCartNumber(cartNumber + 1)}
            >
              <PlusIcon />
            </button>
          </div>

          <button className={styles.productDescription__cartButton}>
            <CartIcon showBadge={false} color="#fff" />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
