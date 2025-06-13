import { TrashIcon } from "@phosphor-icons/react";
import type { DrinkType } from "../../../@types/types";
import { QuantitySelector } from "../../../components/QuantitySelector";
import { IconButton } from "../../../components/IconButton";
import styled, { css } from "styled-components";
import { useContext } from "react";
import { OrdersContext } from "../../../contexts/OrdersContext";

export interface SummaryCardProps {
  drink: DrinkType;
  quantity: number;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({
  drink,
  quantity,
}) => {
  const { addOneToAnItem, removeItemFromOrder, removeOneFromAnItem } =
    useContext(OrdersContext);

  function addOne() {
    addOneToAnItem(drink.id);
  }
  function removeOne() {
    removeOneFromAnItem(drink.id);
  }
  function deleteOne() {
    removeItemFromOrder(drink.id);
  }

  const multipliedPrice = quantity * drink.price;
  return (
    <StyledCard>
      <div className="left-pannel">
        <img src={drink.imageUrl} alt="Imagem do café" />
        <div className="information">
          <p>{drink.name}</p>
          <div className="buttons">
            <QuantitySelector
              addOne={addOne}
              removeOne={removeOne}
              quantity={quantity}
            />

            <IconButton onClick={deleteOne} color="yellow">
              <TrashIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <p>
        <b>R$ {multipliedPrice.toFixed(2)}</b>
      </p>
    </StyledCard>
  );
};

const StyledCard = styled.article`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    height: 96px;
    width: 100%;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${theme.base.button};
    img {
      height: 80%;
    }
    .left-pannel {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .information {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      height: 100%;
    }
    .buttons {
      display: flex;
      gap: 1rem;
    }
  `}
`;
