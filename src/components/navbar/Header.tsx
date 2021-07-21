import React from "react";
import { Box, AppBar, Toolbar, Avatar, styled } from "@material-ui/core";
import { BoldText } from "../theme/Font";
import { ThemeChanger } from "../theme";

const Bar = styled(AppBar)({
  boxShadow: "none"
});

export const Header = React.memo(() => {
  return (
    <Bar>
      <Toolbar>
        <Box flex={2}>
          <BoldText variant="h5">TECHI BLOG</BoldText>
        </Box>
        <Box display="flex" flex={1} justifyContent="flex-end">
          <ThemeChanger />
          <Avatar alt="Tetsuya Yamada" src="/icon.jpg" />
        </Box>
      </Toolbar>
    </Bar>
  );
});
