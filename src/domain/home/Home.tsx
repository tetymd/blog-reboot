import React from "react";
import { ArticleList } from "./articleList";
import { Box } from "@material-ui/core";

export const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignContent="center"
      alignItems="center"
    >
      <ArticleList />
    </Box>
  );
};
