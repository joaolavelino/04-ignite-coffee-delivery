import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/Global";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <h1>Hello Coffee Delivery</h1>
        <input type="text" />
      </ThemeProvider>
    </>
  );
}

export default App;
