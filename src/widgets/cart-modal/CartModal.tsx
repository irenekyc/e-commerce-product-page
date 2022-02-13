import React, { FunctionComponent, useEffect, useState } from "react";
import classnames from "classnames";

import styles from "./CartModal.module.scss";

import { CartItem } from "../../typings/Cart";
import { DeleteIcon } from "../../components/icons";

interface CartModalProps {
  show: boolean;
  clickClose: () => void;
}

const CartModal: FunctionComponent<CartModalProps> = ({
  show,
  clickClose,
}: CartModalProps) => {
  const [modalPositionX, setModalPositionX] = useState<string>("50%");
  const cartItems: CartItem[] = [
    {
      product: {
        id: "1",
        brand: "Sneakers Limited",
        name: "Autumn Limited Edition Sneakers",
        price: {
          original: 250,
          discount: "50%",
          discounted: 125,
        },
        description: "descriptioin",
      },
      number: 3,
    },
  ];

  const onClickCheckout = () => {
    clickClose();
  };

  useEffect(() => {
    if (!show) return;
    if (show && window.innerWidth >= 1360) {
      const cartIcon = document.getElementById("cart-icon");
      if (cartIcon) {
        const cartIconPositionX = cartIcon.getBoundingClientRect().x;
        setModalPositionX(`${cartIconPositionX}px`);
      }
    }
  }, [show]);

  return (
    <div
      className={classnames(styles.cartModal__container, {
        [styles.cartModal__container__show]: show,
      })}
      style={{
        left: modalPositionX,
      }}
    >
      <div className={styles.cartModal__header}>
        <h3>Cart</h3>
      </div>
      <div className={styles.cartModal__content}>
        <ul>
          {cartItems.map((cartItem: CartItem) => (
            <li
              className={styles.cartModal__cartItem}
              key={cartItem.product.id}
            >
              <img
                src={"/images/image-product-1-thumbnail.jpg"}
                alt={cartItem.product.id}
              />
              <div className={styles.cartModal__cartItem__text}>
                <p>{cartItem.product.name}</p>
                <p>
                  ${cartItem.product.price.discounted.toFixed(2)} x{" "}
                  {cartItem.number}{" "}
                  <span className={styles.cartModal__subTotal}>
                    $
                    {(
                      cartItem.product.price.discounted * cartItem.number
                    ).toFixed(2)}
                  </span>
                </p>
              </div>
              <button>
                <DeleteIcon />
              </button>
            </li>
          ))}
        </ul>
        <button
          className={styles.cartModal__checkoutButton}
          onClick={onClickCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartModal;
