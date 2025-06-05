import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 ${({ theme }) => css`
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }

   body {
     background-color: ${theme.base.background};
   }
   p {
     color: ${theme.base.text};
     font-family: ${theme.font.text};
   }
   h1,
   h2,
   h3 {
     color: ${theme.base.title};
     font-family: ${theme.font.title};
   }
 `}
`;
