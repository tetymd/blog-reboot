import React from "react";
import { ArticleList } from "./articleList";
import { Box } from "@material-ui/core";
import { Query, GET_POSTS } from "../../services/apollo";

export const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignContent="center"
      alignItems="center"
    >
      <Query
        query={GET_POSTS}
        variables={{ take: 8, skip: 0 }}
        errorPolicy="all"
        notifyOnNetworkStatusChange={true}
      >
        {ArticleList}
      </Query>
    </Box>
  );
};
