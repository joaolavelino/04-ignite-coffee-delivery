import styled, { css } from "styled-components";
import { SummaryCard } from "./SummaryCard";
import { useNavigate } from "react-router-dom";

export interface OrderSummaryProps {}

const dummyData = [
  {
    drink: {
      id: "caf-op-01",
      name: "Espresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 4.9,
      imageUrl: "/coffees/espresso.png",
      tags: ["tradicional"],
    },
    quantity: 2,
  },
  {
    drink: {
      id: "caf-op-02",
      name: "Espresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: 4.9,
      imageUrl: "/coffees/espresso-americano.png",
      tags: ["tradicional"],
    },
    quantity: 1,
  },
  {
    drink: {
      id: "caf-op-02",
      name: "Espresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: 4.9,
      imageUrl: "/coffees/espresso-americano.png",
      tags: ["tradicional"],
    },
    quantity: 1,
  },
];

export const OrderSummary: React.FC<OrderSummaryProps> = () => {
  const navigate = useNavigate();

  function confirmOrder() {
    navigate("/confirmation");
  }

  return (
    <StyledSummary>
      <div className="card-list">
        {dummyData.map((item) => (
          <SummaryCard drink={item.drink} quantity={item.quantity} />
        ))}
      </div>
      <div className="subtotals">
        <p>Total de itens</p>
        <p>R$ 12,34</p>
      </div>
      <div className="subtotals">
        <p>Total de itens</p>
        <p>R$ 3,00</p>
      </div>
      <div className="total">
        <p>
          <b>Total</b>
        </p>
        <p>
          <b>R$ 15,34</b>
        </p>
      </div>
      <button className="confirm-btn" onClick={confirmOrder}>
        Confirmar Pedido
      </button>
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
