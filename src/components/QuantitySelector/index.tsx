import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import styled, { css } from "styled-components";

export interface QuantitySelectorProps {
  quantity: number;
  addOne: () => void;
  removeOne: () => void;
  itemName?: string;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  addOne,
  removeOne,
  itemName = "",
}) => {
  return (
    <StyledSelector>
      <button
        onClick={removeOne}
        type="button"
        disabled={quantity == 1}
        aria-label={`remova um ${itemName}`}
      >
        <MinusIcon />
      </button>
      <p>{quantity}</p>
      <button
        onClick={addOne}
        type="button"
        aria-label={`adicione um ${itemName}`}
      >
        <PlusIcon />
      </button>
    </StyledSelector>
  );
};

const StyledSelector = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: ${theme.base.button};
    height: 38px;
    width: 72px;
    font-size: 1rem;
    border-radius: 4px;
    p {
      width: 0.75rem;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border: none;
      outline: none;
      font-size: 1rem;
      color: ${theme.purple[500]};
      &:hover {
        color: ${theme.purple[700]};
      }
      &:disabled {
        color: ${theme.base.label};
      }
    }
  `}
`;
