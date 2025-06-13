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

    default:
      return state;
  }
}
