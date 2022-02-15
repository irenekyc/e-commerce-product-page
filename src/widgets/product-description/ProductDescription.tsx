import React, { FunctionComponent, useState, useEffect } from "react";
import ProductImageSwiper from "../../components/product-image-swiper";
import styles from "./ProductDescription.module.scss";
import { CartIcon, MinusIcon, PlusIcon } from "../../components/icons";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { addToCart } from "../../reducer/user/actions";
import { CartItem } from "../../typings/Cart";

const ProductDescription: FunctionComponent = () => {
  const [cartNumber, setCartNumber] = useState<number>(0);
  const { info: product } = useSelector((state: RootState) => state.product);
  const { cart } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const minusCartNumber = () => {
    if (cartNumber === 0) return;
    setCartNumber(cartNumber - 1);
  };

  useEffect(() => {
    if (!product) return;
    const existingProductOnCart: CartItem[] = cart.filter(
      (item: CartItem) => item.product.id === product.id
    );
    const hasExistingProductOnCart = existingProductOnCart.length > 0;
    if (!hasExistingProductOnCart) {
      setCartNumber(0);
    } else {
      setCartNumber(existingProductOnCart[0].number);
    }
  }, [cart, product]);

  const onClickAddToCart = () => {
    if (!product) return;
    dispatch(addToCart({ product, number: cartNumber }));
  };

  if (!product) return null;

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

          <button
            className={styles.productDescription__cartButton}
            onClick={onClickAddToCart}
          >
            <CartIcon showBadge={false} color="#fff" />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
