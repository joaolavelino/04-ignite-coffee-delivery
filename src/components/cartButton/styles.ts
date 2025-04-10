import styled, { css } from "styled-components";

export interface CartButtonContainerProps {
  float?: boolean;
}

export const CartButtonContainer = styled.div<CartButtonContainerProps>`
  ${({ theme, float }) => css`
    position: ${float ? "fixed" : "static"};
    top: 2rem;
    right: 2rem;
    transition: 200ms;

    .quantityBox {
      position: relative;
      top: 0.75rem;
      right: -1.75rem;
      background-color: ${theme.yellowDark};
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.baseWhite};
      font-weight: bold;
      font-size: 0.75rem;
    }
  `}
`;
