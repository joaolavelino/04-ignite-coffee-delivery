import styled, { css } from "styled-components";

export interface ButtonContainerProps {
  variant?: "primary" | "secondary" | "icon";
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${({ theme, variant }) => css`
    background-color: ${variant == "primary"
      ? theme.yellow
      : variant == "secondary"
      ? theme.baseButton
      : theme.purple};
    min-width: ${variant == "primary"
      ? "8.25rem"
      : variant == "secondary"
      ? "6rem"
      : "2.5rem"};

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
      color: ${variant == "secondary" && theme.purple};
      width: 1.4rem;
      height: 1.4rem;
    }

    &:hover {
      background-color: ${variant == "primary"
        ? theme.yellowDark
        : variant == "secondary"
        ? theme.baseHover
        : theme.purpleDark};
    }
  `}
`;
