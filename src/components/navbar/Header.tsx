import React, { useState, useCallback } from "react";
import { Box, AppBar, Toolbar, Avatar, styled } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { BoldText } from "../theme/Font";
import { ThemeChanger } from "../theme";
import { Profile } from "../profile";

const Bar = styled(AppBar)({
  boxShadow: "none"
});

export const Header = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const setState = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const history = useHistory();
  const handleLink = (path: any) => history.push(path);

  return (
    <Bar>
      <Toolbar>
        <Box flex={2}>
          <BoldText variant="h5" onClick={() => handleLink("/")}>
            TECHI BLOG
          </BoldText>
        </Box>
        <Box display="flex" flex={1} justifyContent="flex-end">
          <ThemeChanger />
          <Avatar alt="Tetsuya Yamada" src="/icon.jpg" onClick={setState} />
        </Box>
        <Profile isVisible={isVisible} callback={setState} />
      </Toolbar>
    </Bar>
  );
});
