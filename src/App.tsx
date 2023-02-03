import HomePage from "./pages/HomePage/HomePage";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Unbounded", "cursive"].join(","),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
