import { createTheme } from "@material-ui/core";
// import "@fontsource/roboto";

export const lightTheme = createTheme({
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
    // MuiCssBaseline: {
    //   "@global": {
    //     body: {
    //       backgroundColor: "rgb(255, 255, 255)"
    //     }
    //   }
    // },
    MuiAppBar: {
      colorPrimary: {
        color: "#333344",
        backgroundColor: "rgb(255, 255, 255, 0.3)"
      }
    }
  }
});

export const darkTheme = createTheme({
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
    // MuiCssBaseline: {
    //   "@global": {
    //     body: {
    //       backgroundColor: "rgb(31, 41, 55)"
    //     }
    //   }
    // },
    MuiAppBar: {
      colorPrimary: {
        color: "rgb(229, 231, 235)",
        backgroundColor: "rgb(31, 41, 55, 0.3)"
      }
    }
  }
});

export { BoldText } from "./Font";
export { ThemeChanger } from "./ThemeChanger";
