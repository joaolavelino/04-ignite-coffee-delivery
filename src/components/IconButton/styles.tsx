import styled, { css } from "styled-components";
export interface StyledIconButtonProps {
  color: "purple" | "yellow";
}

export const StyledIconButton = styled.button<StyledIconButtonProps>`
  ${({ theme, color }) => css`
    background-color: ${color == "purple"
      ? theme.purple[700]
      : theme.yellow[300]};
    color: ${color == "purple" ? theme.base.white : theme.yellow[700]};
    outline: none;
    border: none;
    width: 38px;
    height: 38px;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    &:hover {
      background-color: ${color == "purple"
        ? theme.purple[500]
        : theme.yellow[500]};
      color: ${theme.base.white};
    }
  `}
`;
