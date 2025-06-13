import styled, { css } from "styled-components";

export const CartButtonContainer = styled.div`
  ${({ theme }) => css`
    position: static;
    display: flex;
    flex-direction: column;
    align-items: end;

    .numberContainer {
      background-color: ${theme.darkred};
    }
  `}
`;

interface NumberContainerProps {
  quantity: number;
}
export const NumberContainer = styled.div<NumberContainerProps>`
  ${({ theme, quantity }) => css`
    position: relative;
    top: +10px;
    right: -10px;
    background-color: ${theme.darkred};
    color: white;
    font-family: ${theme.font.text};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    opacity: ${quantity > 0 ? 1 : 0};
  `}
`;
