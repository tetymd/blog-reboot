// import "@fontsource/roboto";

import { ThemeOptions } from "@material-ui/core";

export const lightTheme: ThemeOptions = {
  palette: {
    type: "light",
    text: {
      primary: "#333344"
    },
    background: {
      default: "rgb(255, 255, 255)"
    }
  },
  typography: {
    fontFamily: "'roboto'"
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        color: "#333344",
        backgroundColor: "rgb(255, 255, 255, 0.3)"
      }
    }
  }
};

export const darkTheme: ThemeOptions = {
  palette: {
    type: "dark",
    text: {
      primary: "rgb(229, 231, 235)"
    },
    background: {
      default: "rgb(31, 41, 55)"
    }
  },
  typography: {
    fontFamily: "'roboto'"
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        color: "rgb(229, 231, 235)",
        backgroundColor: "rgb(31, 41, 55, 0.3)"
      }
    }
  }
};

export { BoldText } from "./Font";
export { ThemeChanger } from "./ThemeChanger";
