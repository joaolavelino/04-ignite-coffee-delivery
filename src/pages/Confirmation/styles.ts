import styled, { css } from "styled-components";

export const ConfirmationCard = styled.main`
  ${({ theme }) => css`
    display: flex;
    gap: 4rem;
    margin-top: 5rem;
    align-items: end;

    .left {
      width: 525px;
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
    }

    h2 {
      font-size: 2rem;
      color: ${theme.yellow[700]};
    }

    section {
      padding: 2.5rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      background-color: ${theme.base.card};
      border-radius: ${theme.cardBorder};
      ${theme.cardShadow}

      .icon {
        background-color: ;
      }
      .confirm-item {
        display: flex;
        gap: 1rem;
      }
    }
    img {
      width: 492px;
      height: 293px;
    }
  `}
`;

interface iconCircleProps {
  color: string;
}
export const IconCircle = styled.div<iconCircleProps>`
  ${({ color, theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    min-width: 2rem;
    height: 2rem;
    min-height: 2rem;
    color: ${theme.base.white};
    background-color: ${color};
    border-radius: 50%;
  `}
`;

export const BackButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.75rem 2rem;
    color: ${theme.base.white};
    background-color: ${theme.purple[500]};
    border-radius: 8px;
    border: none;
    text-transform: uppercase;
    &:hover {
      background-color: ${theme.purple[700]};
    }
  `}
`;
