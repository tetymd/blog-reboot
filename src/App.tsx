import { useContext } from "react";
import { Header, lightTheme, darkTheme } from "./components";
import { ThemeContext, ThemeProvider } from "./services/contexts";

export default function App() {
  let { isDarkMode } = useContext(ThemeContext);
  console.log(isDarkMode);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Header />
    </ThemeProvider>
  );
}
