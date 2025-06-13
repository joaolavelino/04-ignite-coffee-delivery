import { createContext, useReducer, type ReactNode } from "react";
import type { OrdersData, OrderType } from "../@types/types";
import type { FormType } from "../pages/Checkout/components/Form";
import {
  completeOrderAction,
  createNewOrderAction,
} from "../reducers/orders/actions";
import { OrdersReducer } from "../reducers/orders/reducer";
import { createInitialState } from "../util/functions";

interface OrdersContextData extends OrdersData {
  addItemToOrder: (order: OrderType) => void;
  completeCurrentOrder: (checkoutData: FormType) => void;
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

  function addItemToOrder(newOrder: OrderType) {
    dispatch(createNewOrderAction(newOrder));
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

  return (
    <OrdersContext.Provider
      value={{
        orders,
        currentOrder,
        addItemToOrder,
        completeCurrentOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
