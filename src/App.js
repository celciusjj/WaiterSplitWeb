import Checks from "./components/Checks";
import Header from "./components/Header";
import ModalForm from "./components/ModalForm";
import SnackbarProvider from 'react-simple-snackbar'
import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "./styles/styledGlobal";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <GlobalStyle />
        <Header />
        <Checks />
        <ModalForm />
      </SnackbarProvider>
    </ThemeProvider>
  );
}
export default App;
