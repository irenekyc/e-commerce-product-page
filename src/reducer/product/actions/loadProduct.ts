import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { ProductAPIResponse } from "../../../typings/Product";

const loadProduct = createAsyncThunk<ProductAPIResponse>(
  "loadProduct",
  async () => {
    const res = await axios.get(`product.json`);
    const { data } = res;
    return data;
  }
);

export default loadProduct;
