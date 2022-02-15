import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/user/userSlice";
import productReducer from "./reducer/product/productSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
