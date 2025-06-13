import { useContext } from "react";
import { OrdersContext } from "../../contexts/OrdersContext";
import { HistoryCard } from "./HistoryCard";
import styled from "styled-components";

export interface HistoryPageProps {}

export const HistoryPage: React.FC<HistoryPageProps> = () => {
  const { orders } = useContext(OrdersContext);
  return (
    <>
      <h2>Meus Pedidos</h2>
      <OrderList>
        {orders.map((order) => (
          <HistoryCard key={order.id} order={order} />
        ))}
      </OrderList>
    </>
  );
};

const OrderList = styled.section`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
