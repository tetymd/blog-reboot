import { useContext } from "react";
import { Header, lightTheme, darkTheme } from "./components";
import { ThemeContext, ThemeProvider } from "./services/contexts";
import { createTheme } from "@material-ui/core";

export default function App() {
  let { isDarkMode } = useContext(ThemeContext);
  console.log(isDarkMode);
  const theme = isDarkMode ? createTheme(darkTheme) : createTheme(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}
