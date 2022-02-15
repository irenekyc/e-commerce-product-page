import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInfoType, UserAPIResponse } from "../../typings/User";
import { CartItem } from "../../typings/Cart";
import loadUser from "./actions/loadUser";
import { ProductType } from "../../typings/Product";

export interface UserState {
  user: UserInfoType | undefined;
  cart: CartItem[];
}

const initialState: UserState = {
  user: undefined,
  cart: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteProductFromCart: (
      state,
      action: PayloadAction<{ productId: string }>
    ) => {
      const { productId } = action.payload;
      state.cart = state.cart.filter(
        (cartItem: CartItem) => cartItem.product.id !== productId
      );
    },
    addToCart: (
      state,
      action: PayloadAction<{ product: ProductType; number: number }>
    ) => {
      const { product, number } = action.payload;
      const isExistingCartItem: boolean =
        state.cart.filter((item: CartItem) => item.product.id === product.id)
          .length > 0;

      if (isExistingCartItem) {
        const newCartItems: CartItem[] = state.cart.map((item: CartItem) => {
          if (item.product.id === product.id) {
            item.number = number;
            return item;
          }
          return item;
        });
        state.cart = newCartItems;
      } else {
        const newCartItem: CartItem = {
          product,
          number,
        };
        state.cart.push(newCartItem);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      loadUser.fulfilled,
      (state, action: PayloadAction<UserAPIResponse>) => {
        const { user, cart } = action.payload;
        state.user = user;
        state.cart = cart;
      }
    );
  },
});

export default userSlice.reducer;
