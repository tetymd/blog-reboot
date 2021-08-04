import { useState, useCallback } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography
} from "@material-ui/core";
import MDEditor from "@uiw/react-md-editor";

export const Editor = ({ loading, data }: any) => {
  return (
    <Box width="100%">
      <Card>
        <CardContent>
          {loading ? <p>loading</p> : <EditorMain data={data} />}
        </CardContent>
      </Card>
    </Box>
  );
};

const EditorMain = ({ data }: any) => {
  const [title, setTitle] = useState(data.getPostById.title);
  const [content, setContent] = useState<string | undefined>(
    data.getPostById.content
  );

  const handleSubmit = useCallback(() => {
    console.log(title, content);
  }, [title, content]);
  return (
    <form>
      <Box mb={3} display="flex">
        <Box flex={20}>
          <TextField
            fullWidth
            label="タイトル"
            variant="filled"
            defaultValue={data.getPostById.title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Box>
        <Box
          ml={1}
          mt={1}
          mb={1}
          display="flex"
          flex={1}
          justifyContent="flex-end"
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleSubmit();
            }}
          >
            更新
          </Button>
        </Box>
      </Box>
      <MDEditor height={700} value={content} onChange={(e) => setContent(e)} />
    </form>
  );
};
