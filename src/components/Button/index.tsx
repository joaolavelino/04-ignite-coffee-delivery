import type { ReactNode } from "react";
import styled, { css } from "styled-components";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color: "purple" | "yellow";
}

export const Button: React.FC<ButtonProps> = ({ color, children }) => {
  return <StyledButton color={color}>{children}</StyledButton>;
};

interface ButtonStyleProps {
  color: "purple" | "yellow";
}

const StyledButton = styled.button<ButtonStyleProps>`
  ${({ theme, color }) => css`
    padding: 0.5rem 0.75rem;
    font-size: 0.825rem;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 160%;
    color: ${theme.base.white};
    background-color: ${color == "yellow"
      ? theme.yellow[500]
      : theme.purple[500]};
    border: none;
    border-radius: 8px;
    &:hover {
      background-color: ${theme.yellow[700]};
    }
  `}
`;
