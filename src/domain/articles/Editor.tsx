import React, { useState } from "react";
import { Box, Card, CardContent, Typography } from "@material-ui/core";
import MDEditor from "@uiw/react-md-editor";

export const Editor = React.memo(() => {
  const [content, setContent] = useState<string | undefined>("");

  return (
    <Box width="100%">
      <Card>
        <CardContent>
          <Box>
            <Typography>title</Typography>
          </Box>
          <MDEditor value={content} onChange={(e) => setContent(e)} />
        </CardContent>
      </Card>
    </Box>
  );
});
