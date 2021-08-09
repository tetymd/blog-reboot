import { Box } from "@material-ui/core";
import { Viewer } from "./Viewer";
import { Editor } from "./Editor";
import { GET_POST, Query } from "../../services/apollo";
import { useParams } from "react-router-dom";

export const Articles = () => {
  const params = useParams();
  const isAuth = false;
  return (
    <Box display="flex" justifyContent="center">
      {isAuth ? (
        <Box width={{ xs: "100%", sm: "90%", md: "90%", lg: "90%", xl: "90%" }}>
          <Query
            query={GET_POST}
            variables={params}
            errorPolicy="all"
            notifyOnNetworkStatusChange={true}
          >
            {Editor}
          </Query>
        </Box>
      ) : (
        <Box width={{ xs: "100%", sm: "90%", md: "70%", lg: "60%", xl: "50%" }}>
          <Query
            query={GET_POST}
            variables={params}
            errorPolicy="all"
            notifyOnNetworkStatusChange={true}
          >
            {Viewer}
          </Query>
        </Box>
      )}
    </Box>
  );
};
