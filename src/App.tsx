import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
        <div>
           <h1>Olá</h1>
        </div>
    </ThemeProvider>
  )
}

export default App
