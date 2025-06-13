import type { OrdersData } from "../../@types/types";
import { addDrinksToOrder, createInitialState } from "../../util/functions";
import { type OrdersActionType } from "./actions";

export function OrdersReducer(
  state: OrdersData,
  action: OrdersActionType
): OrdersData {
  switch (action.type) {
    case "COMPLETE_ORDER":
      return {
        ...state,
        orders: [...state.orders, action.payload],
        currentOrder: createInitialState().currentOrder,
      };
    case "ADD_DRINK":
      return {
        ...state,
        currentOrder: addDrinksToOrder(state.currentOrder, action.payload),
      };

    case "REMOVE_ITEM": {
      const updatedList = state.currentOrder.drinks.filter(
        (el) => el.drink.id !== action.payload
      );
      return {
        ...state,
        currentOrder: { ...state.currentOrder, drinks: updatedList },
      };
    }
    case "ADD_ONE": {
      const updatedList = state.currentOrder.drinks.map((item) =>
        item.drink.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return {
        ...state,
        currentOrder: { ...state.currentOrder, drinks: updatedList },
      };
    }
    case "REMOVE_ONE": {
      const updatedList = state.currentOrder.drinks.map((item) => {
        if (item.drink.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      return {
        ...state,
        currentOrder: { ...state.currentOrder, drinks: updatedList },
      };
    }

    default:
      return state;
  }
}
