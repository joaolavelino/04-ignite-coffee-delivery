import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/Global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <h1>Hello Coffee Delivery</h1>
        <input type="text" />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
