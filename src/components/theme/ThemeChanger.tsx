import React, { useContext } from "react";
import { ThemeContext } from "../../services/contexts";
import { Box } from "@material-ui/core";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import NightsStayIcon from "@material-ui/icons/NightsStay";

export const ThemeChanger = React.memo(() => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  console.log("changer", isDarkMode);
  return (
    <Box mr={{ xs: 1, sm: 2 }}>
      {isDarkMode ? (
        <NightsStayIcon
          style={{ fontSize: 40, color: "rgb(229, 231, 235)" }}
          onClick={() => {
            setIsDarkMode(!isDarkMode);
          }}
        />
      ) : (
        <Brightness5Icon
          style={{ fontSize: 40, color: "#DECE64" }}
          onClick={() => {
            setIsDarkMode(!isDarkMode);
          }}
        />
      )}
    </Box>
  );
});
