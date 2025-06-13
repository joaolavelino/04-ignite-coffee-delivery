import type { OrderDrinkInstance, OrderType } from "../@types/types";

export const orderPrice = (
  order: OrderType
): { itemsPrice: string; deliveryTax: string; totalPrice: string } => {
  const itemsPrice = order.drinks
    .reduce((sum, current) => sum + current.quantity * current.drink.price, 0)
    .toFixed(2);
  const deliveryTax = (+itemsPrice * 0.2).toFixed(2);
  const totalPrice = (+itemsPrice + +deliveryTax).toFixed(2);

  return { itemsPrice, deliveryTax, totalPrice };
};

export const itemPrice = (item: OrderDrinkInstance): string => {
  return (item.drink.price * item.quantity).toFixed(2);
};
