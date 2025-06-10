import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    height: 104px;
    .right-pannel {
      display: flex;
      align-items: end;
      gap: 2rem;
    }
    nav {
      ul {
        list-style: none;
        display: flex;
        gap: 1rem;
      }
      a {
        text-decoration: none;
        font-family: ${theme.font.title};
        color: ${theme.base.label};
        font-weight: bolder;
        font-size: 1rem;
        &:hover {
          color: ${theme.purple[500]};
        }
      }
    }
  `}
`;
