import type { FormType } from "../pages/Checkout/components/Form";

export type DrinkType = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  tags: string[];
};

export type AddressType = Omit<FormType, "paymentMethod">;

export type OrderType = {
  drinks: { item: DrinkType; quantity: number }[];
  address: AddressType;
  price: number;
};

export type OrderHistoryType = OrderType[];
