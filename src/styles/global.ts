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
     max-width: 1440px;
     padding: 0 10rem;
     margin: 0 auto;
   }
   p {
     color: ${theme.base.text};
     font-family: ${theme.font.text};
   }
   h1,
   h2,
   h3,
   h4 {
     color: ${theme.base.title};
     font-family: ${theme.font.title};
   }
   button {
     cursor: pointer;
     transition: 200ms;
     &:disabled {
       cursor: not-allowed;
     }
   }

   input {
     padding: 0.75rem;
     background-color: ${theme.base.input};
     border: 1px solid ${theme.base.button};
     border-radius: 4px;
   }
 `}
`;
