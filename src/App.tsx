import { useContext } from "react";
import { Header, lightTheme, darkTheme } from "./components";
import { ThemeContext, ThemeProvider } from "./services/contexts";
import { createTheme, Box } from "@material-ui/core";
import { Routing } from "./services/routing";

export default function App() {
  let { isDarkMode } = useContext(ThemeContext);
  console.log(isDarkMode);
  const theme = isDarkMode ? createTheme(darkTheme) : createTheme(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  );
}
