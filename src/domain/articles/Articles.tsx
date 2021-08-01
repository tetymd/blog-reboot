import { Box } from "@material-ui/core";
import { Viewer } from "./Viewer";
import { Editor } from "./Editor";

export const Articles = () => {
  const isAuth = false;
  return (
    <Box display="flex" justifyContent="center">
      {isAuth ? (
        <Box width={{ xs: "100%", sm: "90%", md: "90%", lg: "90%", xl: "90%" }}>
          <Editor />
        </Box>
      ) : (
        <Box width={{ xs: "100%", sm: "90%", md: "60%", lg: "55%", xl: "50%" }}>
          <Viewer />
        </Box>
      )}
    </Box>
  );
};
