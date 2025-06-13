import type {
  DrinkType,
  OrderDrinkInstance,
  OrderType,
} from "../../@types/types";

export enum ActionTypes {
  CREATE_ORDER = "CREATE_ORDER",
  UPDATE_ORDER = "UPDATE_ORDER",
  REMOVE_ITEM = "REMOVE_ITEM",
  COMPLETE_ORDER = "COMPLETE_ORDER",
  ADD_DRINK = "ADD_DRINK",
  ADD_ONE = "ADD_ONE",
  REMOVE_ONE = "REMOVE_ONE",
}
export type OrdersActionType =
  | { type: "CREATE_ORDER"; payload: OrderType }
  | { type: "UPDATE_ORDER"; payload: OrderType }
  | { type: "REMOVE_ITEM"; payload: { id: string; itemId: string } }
  | { type: "COMPLETE_ORDER"; payload: OrderType }
  | { type: "ADD_ONE"; payload: { orderId: string; itemId: string } }
  | { type: "REMOVE_ONE"; payload: { orderId: string; itemId: string } }
  | { type: "ADD_DRINK"; payload: { quantity: number; drink: DrinkType } };

export function createNewOrderAction(newOrder: OrderType): OrdersActionType {
  return {
    type: ActionTypes.CREATE_ORDER,
    payload: newOrder,
  };
}
export function completeOrderAction(order: OrderType): OrdersActionType {
  return {
    type: ActionTypes.COMPLETE_ORDER,
    payload: order,
  };
}
export function addDrinkToCartAction(
  itemToAdd: OrderDrinkInstance
): OrdersActionType {
  return {
    type: ActionTypes.ADD_DRINK,
    payload: itemToAdd,
  };
}
