import styled, { css } from "styled-components";

export const DrinkList = styled.section`
  ${() => css`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 2rem;
  `}
`;
export const Banner = styled.section`
  ${() => css`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0rem;
    padding: 4rem 0;

    h2 {
      font-size: 2rem;
      line-height: 2.2rem;
    }

    .left {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 588px;
    }
    img {
      width: 476px;
    }
  `}
`;

export const StyledFeatureList = styled.section`
  ${() => css`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 2rem;
    padding: 2rem 0;
  `}
`;

interface FeatureItemProps {
  color: string;
}
export const FeatureItem = styled.section<FeatureItemProps>`
  ${({ color, theme }) => css`
    display: flex;
    gap: 1rem;
    width: 40%;
    align-items: center;
    .icon-container {
      background-color: ${color};
      width: 2rem;
      height: 2rem;
      min-width: 2rem;
      min-height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: ${theme.base.white};
    }
  `}
`;
