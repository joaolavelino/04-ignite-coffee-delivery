import styled, { css } from "styled-components";

export const MenuCardContainer = styled.div`
  ${({ theme }) => css`
    margin-top: 40px;
    width: 256px;
    height: 310px;
    border-radius: 6px 36px 6px 36px;
    padding: 1.5rem;
    background-color: ${theme.baseCard};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    img {
      height: 120px;
      width: 120px;
      position: relative;
      top: -20px;
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
    }

    .tagList {
      display: flex;
      align-items: center;
      justify-content: center;

      div {
        background-color: ${theme.yellowLight};
        padding: 4px 8px;
        border-radius: 20px;
        font-size: 0.75rem;
        text-transform: uppercase;
        font-weight: bold;
        color: ${theme.yellowDark};
      }
    }
    h3 {
      font-size: 1.25rem;
      font-family: "Baloo 2", sans-serif;
    }
    p {
      font-size: 0.875rem;
      color: ${theme.baseLabel};
      text-align: center;
    }

    footer {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      .selector {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 2.5rem;
        width: 72px;
        background-color: ${theme.baseButton};
        border-radius: 6px;
        padding: 6px 8px;
        p {
          font-size: 1rem;
          color: ${theme.baseText};
        }
        button {
          border: none;
          background: none;
          color: ${theme.purple};
        }
      }
      .buttons {
        display: flex;
        gap: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .price {
        font-size: 1.5rem;
        font-family: "Baloo 2", sans-serif;
        font-weight: bold;
        color: ${theme.baseText};
      }
    }
  `}
`;
