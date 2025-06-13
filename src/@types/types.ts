import type { FormType } from "../pages/Checkout/components/Form";

export type DrinkType = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  tags: string[];
};

export type OrderDrinkInstance = { drink: DrinkType; quantity: number };

export type AddressType = Omit<FormType, "paymentMethod">;

export type OrderType = {
  id: string;
  drinks: OrderDrinkInstance[];
  address?: AddressType;
  payment?: string;
  date?: Date;
};

export type OrdersData = {
  orders: OrderType[];
  currentOrder: OrderType;
};
