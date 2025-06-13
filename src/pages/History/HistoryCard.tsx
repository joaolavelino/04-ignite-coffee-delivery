import styled, { css } from "styled-components";
import type { OrderType } from "../../@types/types";
import { itemPrice, orderPrice } from "../../util/orderPrice";
import { formatDate } from "../../util/formatDate";

export interface HistoryCardProps {
  order: OrderType;
}

export const HistoryCard: React.FC<HistoryCardProps> = ({ order }) => {
  const { deliveryTax, itemsPrice, totalPrice } = orderPrice(order);

  console.log();
  return (
    <StyledHistoryCard>
      <div>
        <ul>
          {order.drinks.map((drink) => (
            <li key={drink.drink.id}>
              <img src={drink.drink.imageUrl} alt="" />
              <p>
                <b>{drink.quantity}</b>x {drink.drink.name} - R$
                {itemPrice(drink)}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="infoContainer">
        <h3>{formatDate(order.date)}</h3>

        <p>
          <b>Pedido:</b> {order.id}
        </p>
        <p>
          <b>Endereço:</b>{" "}
          {`${order.address?.street} ,${order.address?.number} ${order.address?.additional} - CEP: ${order.address?.zip}`}
        </p>
        <p>
          <b>Cidade:</b> {`${order.address?.city} - ${order.address?.state} `}
        </p>
        <p>
          <b>Pagamento:</b> {`${order.payment}`}
        </p>
      </div>
      <div className="priceContainer">
        <h4>R${totalPrice}</h4>
        <p>Items: R${itemsPrice}</p>
        <p>Entrega: R${deliveryTax}</p>
      </div>
    </StyledHistoryCard>
  );
};

export const StyledHistoryCard = styled.article`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2rem;
    background-color: ${theme.base.card};
    border-radius: ${theme.cardBorder};
    ${theme.cardShadow};
    ul {
      margin-top: 0.5rem;
    }
    li {
      display: flex;
      align-items: center;
      gap: 1rem;
      img {
        height: 2rem;
      }
    }
    .priceContainer {
      display: flex;
      flex-direction: column;
      height: 100%;
      border-left: 1px solid ${theme.base.label};
      padding-left: 2rem;
      margin-left: 2rem;
      h4 {
        font-size: 2rem;
      }
    }
  `}
`;
