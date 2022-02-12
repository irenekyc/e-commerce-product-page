export type ProductType = {
  id: string;
  brand: string;
  name: string;
  description: string;
  price: {
    original: number;
    discount: string;
    discounted: number;
  };
};
