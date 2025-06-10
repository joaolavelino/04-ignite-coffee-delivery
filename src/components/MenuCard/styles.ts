import styled, { css } from "styled-components";

export const StyledCard = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    gap: 1rem;
    width: 16rem;
    height: 20rem;
    padding: 1.75rem;
    background-color: ${theme.base.card};
    border-radius: 0 2.5rem 0 2.5rem;
    text-align: center;

    p {
      color: ${theme.base.label};
      font-weight: light;
      font-size: 0.825rem;
    }

    img {
      width: 7.5rem;
      position: relative;
    }
    .tag-list {
      display: flex;
      gap: 1rem;
    }

    .tag {
      font-size: 0.66rem;
      text-transform: uppercase;
      color: ${theme.yellow[700]};
      padding: 0.25rem 0.5rem;
      background-color: ${theme.yellow[300]};
      border-radius: 10px;
    }

    footer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .price {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      h4 {
        font-size: 1.5rem;
      }
    }

    .buttons {
      display: flex;
      gap: 0.5rem;
    }
  `}
`;
