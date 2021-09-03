import { useState, useCallback } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography
} from "@material-ui/core";
import Tags from "@yaireo/tagify/dist/react.tagify";
import "@yaireo/tagify/dist/tagify.css";
import MDEditor from "@uiw/react-md-editor";

export const Editor = ({ loading, data }: any) => {
  console.log(data);
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
  const [tags, setTags] = useState(
    data.getPostById.tags.map((tag: any) => tag.name)
  );
  const [content, setContent] = useState<string | undefined>(
    data.getPostById.content
  );

  const handleSubmit = useCallback(() => {
    console.log(title, tags, content);
  }, [title, tags, content]);

  console.log(tags);

  const onChange = (e: any) => {
    setTags(e.detail.tagify.value.map((tag: any) => tag.value));
  };
  return (
    <form>
      <Box mb={1} display="flex">
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
      <Box mb={3}>
        <Tags
          settings={{ placeholder: "タグ" }}
          defaultValue={tags}
          onChange={(e) => onChange(e)}
        />
      </Box>
      <MDEditor height={700} value={content} onChange={(e) => setContent(e)} />
    </form>
  );
};
