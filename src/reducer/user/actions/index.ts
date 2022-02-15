import { userSlice } from "../userSlice";

export { default as loadUser } from "./loadUser";

export const { addToCart, deleteProductFromCart } = userSlice.actions;
