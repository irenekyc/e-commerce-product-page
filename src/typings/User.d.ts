import { CartItem } from "./Cart";

export type UserInfoType = {
  name: string;
  thumbnail: string;
};

export type UserAPIResponse = {
  user: UserInfoType;
  cart: CartItem[];
};
