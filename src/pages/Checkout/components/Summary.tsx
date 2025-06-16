import { useContext } from "react";
import styled, { css } from "styled-components";
import { Button } from "../../../components/Button";
import { OrdersContext } from "../../../contexts/OrdersContext";
import { orderPrice } from "../../../util/orderPrice";
import { SummaryCard } from "./SummaryCard";

export interface OrderSummaryProps {}

export const OrderSummary: React.FC<OrderSummaryProps> = () => {
  const { currentOrder } = useContext(OrdersContext);

  const { deliveryTax, itemsPrice, totalPrice } = orderPrice(currentOrder);

  return (
    <StyledSummary>
      <div className="card-list">
        {currentOrder.drinks.map((item) => (
          <>
            <SummaryCard
              drink={item.drink}
              quantity={item.quantity}
              key={item.drink.id}
            />
          </>
        ))}
      </div>
      <div className="subtotals">
        <p>Total de itens</p>
        <p>R$ {itemsPrice}</p>
      </div>
      <div className="subtotals">
        <p>Taxa de entrega</p>
        <p>R$ {deliveryTax}</p>
      </div>
      <div className="total">
        <p>
          <b>Total</b>
        </p>
        <p>
          <b>R$ {totalPrice}</b>
        </p>
      </div>
      <Button
        color="yellow"
        type="submit"
        disabled={!currentOrder.drinks.length}
      >
        Confirmar Pedido
      </Button>
    </StyledSummary>
  );
};

const StyledSummary = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.base.card};
    border-radius: 0 2rem 0 2rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .card-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .subtotals {
      display: flex;
      justify-content: space-between;
    }

    .total {
      display: flex;
      justify-content: space-between;
      font-size: 1.25rem;
      font-family: ${theme.font.title};
    }
    .confirm-btn {
      padding: 0.5rem 0.75rem;
      font-size: 0.825rem;
      text-transform: uppercase;
      font-weight: bold;
      line-height: 160%;
      color: ${theme.base.white};
      background-color: ${theme.yellow[500]};
      border: none;
      border-radius: 8px;
      &:hover {
        background-color: ${theme.yellow[700]};
      }
    }
  `}
`;
