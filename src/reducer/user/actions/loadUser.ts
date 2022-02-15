import { createAsyncThunk } from "@reduxjs/toolkit";

import { UserAPIResponse } from "../../../typings/User";
import axios from "axios";

const loadUser = createAsyncThunk<UserAPIResponse>("loadUser", async () => {
  const baseURL =
    process.env.NODE_ENV === "development" ? "" : "/e-commerce-product-page";
  const res = await axios.get(`${baseURL}/user.json`);
  const { data } = res;
  return data;
});

export default loadUser;
