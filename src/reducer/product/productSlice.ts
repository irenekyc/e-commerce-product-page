import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProductType, ProductAPIResponse } from "../../typings/Product";
import loadProduct from "./actions/loadProduct";

export interface ProductState {
  info: ProductType | undefined;
}

const initialState: ProductState = {
  info: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      loadProduct.fulfilled,
      (state, action: PayloadAction<ProductAPIResponse>) => {
        const { product } = action.payload;
        state.info = product;
      }
    );
  },
});

export default userSlice.reducer;
