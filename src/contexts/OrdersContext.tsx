import { createContext, useReducer, type ReactNode } from "react";
import type {
  OrderDrinkInstance,
  OrdersData,
  OrderType,
} from "../@types/types";
import type { FormType } from "../pages/Checkout/components/Form";
import {
  addDrinkToCartAction,
  addOneToAnItemAction,
  completeOrderAction,
  removeItemFromOrderAction,
  removeOneFromAnItemAction,
} from "../reducers/orders/actions";
import { OrdersReducer } from "../reducers/orders/reducer";
import { createInitialState } from "../util/functions";

interface OrdersContextData extends OrdersData {
  addItemToOrder: (itemToAdd: OrderDrinkInstance) => void;
  completeCurrentOrder: (checkoutData: FormType) => void;
  addOneToAnItem: (itemId: string) => void;
  removeOneFromAnItem: (itemId: string) => void;
  removeItemFromOrder: (itemId: string) => void;
  currentOrder: OrderType;
}

export const OrdersContext = createContext({} as OrdersContextData);

interface OrdersContextProviderProps {
  children: ReactNode;
}

export const OrdersContextProvider: React.FC<OrdersContextProviderProps> = ({
  children,
}) => {
  const [ordersState, dispatch] = useReducer(
    OrdersReducer,
    createInitialState(),
    (initialState) => initialState
  );

  const { currentOrder, orders } = ordersState;

  function addItemToOrder(itemToAdd: OrderDrinkInstance) {
    dispatch(addDrinkToCartAction(itemToAdd));
  }

  function completeCurrentOrder(checkoutData: FormType) {
    if (currentOrder) {
      const { paymentMethod, ...adressInfo } = checkoutData;
      const completeOrder: OrderType = {
        ...currentOrder,
        date: new Date(),
        address: adressInfo,
        payment: paymentMethod,
      };
      dispatch(completeOrderAction(completeOrder));
    } else return;
  }

  function addOneToAnItem(drinkId: string) {
    dispatch(addOneToAnItemAction(drinkId));
  }
  function removeOneFromAnItem(drinkId: string) {
    dispatch(removeOneFromAnItemAction(drinkId));
  }
  function removeItemFromOrder(drinkId: string) {
    dispatch(removeItemFromOrderAction(drinkId));
  }

  return (
    <OrdersContext.Provider
      value={{
        orders,
        currentOrder,
        addItemToOrder,
        completeCurrentOrder,
        addOneToAnItem,
        removeItemFromOrder,
        removeOneFromAnItem,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
