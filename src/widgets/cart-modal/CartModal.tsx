import React, { FunctionComponent, useEffect, useState } from "react";
import classnames from "classnames";

import styles from "./CartModal.module.scss";

import { CartItem } from "../../typings/Cart";
import { DeleteIcon } from "../../components/icons";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { deleteProductFromCart } from "../../reducer/user/actions";

interface CartModalProps {
  show: boolean;
  clickClose: () => void;
}

const CartModal: FunctionComponent<CartModalProps> = ({
  show,
  clickClose,
}: CartModalProps) => {
  const [modalPositionX, setModalPositionX] = useState<string>("50%");
  const { cart: cartItems } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const onClickCheckout = () => {
    clickClose();
  };

  const onClickDeleteCartItem = (productId: string) => {
    dispatch(deleteProductFromCart({ productId }));
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
        {cartItems.length === 0 ? (
          <p className={styles.cartModal__content__emptyText}>
            {" "}
            Your cart is empty
          </p>
        ) : (
          <>
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
                  <button
                    onClick={() => onClickDeleteCartItem(cartItem.product.id)}
                  >
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
            </button>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
