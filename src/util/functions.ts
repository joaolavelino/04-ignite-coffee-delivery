import type {
  OrderDrinkInstance,
  OrdersData,
  OrderType,
} from "../@types/types";
import { v4 as uuidv4 } from "uuid";

export const createInitialState = (): OrdersData => {
  return { orders: [], currentOrder: { id: uuidv4(), drinks: [] } };
};

export const addDrinksToOrder = (
  currentOrder: OrderType,
  itemToAdd: OrderDrinkInstance
): OrderType => {
  //check if drink is already on the order
  const drinkInstanceInCart = currentOrder.drinks.find(
    (el) => el.drink.id === itemToAdd.drink.id
  );
  //add to the list
  if (drinkInstanceInCart) {
    const updatedDrinks = currentOrder.drinks.map((instance) => {
      if (instance.drink.id !== itemToAdd.drink.id) {
        return instance;
      } else {
        const newQuantity = instance.quantity + itemToAdd.quantity;
        return { ...instance, quantity: newQuantity };
      }
    });
    return { ...currentOrder, drinks: updatedDrinks };
  } else {
    return { ...currentOrder, drinks: [...currentOrder.drinks, itemToAdd] };
  }
};
