import React, { createContext, useState } from "react";
import { ThemeProvider as Provider, CssBaseline } from "@material-ui/core";

export const ThemeContext = createContext(
  {} as {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  }
);

export const ThemeContextProvider = ({ children, ...res }: any) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const value = {
    isDarkMode,
    setIsDarkMode
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const ThemeProvider = ({ theme, children, ...res }: any) => {
  return (
    <Provider theme={theme}>
      <CssBaseline />
      {children}
    </Provider>
  );
};
