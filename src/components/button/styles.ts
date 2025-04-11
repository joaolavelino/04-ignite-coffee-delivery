import styled, { css } from "styled-components";

export interface ButtonContainerProps extends HTMLButtonElement {
  variant?: "primary" | "secondary" | "icon" | "cart";
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${({ theme, variant }) => css`
    background-color: ${variant == "primary"
      ? theme.yellow
      : variant == "secondary"
      ? theme.baseButton
      : variant == "icon"
      ? theme.purpleDark
      : variant == "cart" && theme.yellowLight};
    min-width: ${variant == "primary"
      ? "8.25rem"
      : variant == "secondary"
      ? "6rem"
      : "2.5rem"};
    max-width: ${variant == "cart" && "2.5rem"};
    width: ${variant == "icon" && "2.5rem"};
    height: ${variant == "icon" && "2.5rem"};
    padding-inline: 0.5rem;
    padding-block: ${variant == "primary" ? "0.75rem" : "0.5rem"};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    color: ${variant == "secondary" ? theme.baseText : theme.baseWhite};
    text-transform: uppercase;
    font-weight: ${variant == "primary" && "bold"};
    border: none;
    border-radius: 6px;

    transition: 200ms;

    svg {
      color: ${variant == "secondary"
        ? theme.purple
        : variant == "cart" && theme.yellowDark};
      width: 1.4rem;
      height: 1.4rem;
    }

    &:hover {
      background-color: ${variant == "primary"
        ? theme.yellowDark
        : variant == "secondary"
        ? theme.baseHover
        : variant == "icon"
        ? theme.purple
        : variant == "cart" && theme.yellow};
    }
  `}
`;
