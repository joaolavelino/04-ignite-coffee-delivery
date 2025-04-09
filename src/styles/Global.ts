import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.yellowDark};
    }

    body{
        background:${(props) => props.theme.baseBG};
        color:${(props) => props.theme.baseText};
        -webkit-font-smoothing:antialiased;
    }

    body,textarea,input,button{
        font-family: Roboto, sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    button{
        cursor: pointer;

        &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
    }

    input{
        padding: 0.75rem;
        border-radius: 4px;
        border:2px solid ${({ theme }) => theme.baseButton};
        outline: 0 0 0 2px ${(props) => props.theme.baseButton};
        background-color: ${({ theme }) => theme.baseInput};
    }
`;
