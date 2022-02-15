import { createAsyncThunk } from "@reduxjs/toolkit";

import { UserAPIResponse } from "../../../typings/User";
import axios from "axios";

const loadUser = createAsyncThunk<UserAPIResponse>("loadUser", async () => {
  const res = await axios.get("/user.json");
  const { data } = res;
  return data;
});

export default loadUser;
