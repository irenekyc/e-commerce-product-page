import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { ProductAPIResponse } from "../../../typings/Product";

const loadProduct = createAsyncThunk<ProductAPIResponse>(
  "loadProduct",
  async () => {
    const baseURL =
      process.env.NODE_ENV === "development" ? "" : "/e-commerce-product-page";
    const res = await axios.get(`${baseURL}/product.json`);
    const { data } = res;
    return data;
  }
);

export default loadProduct;
