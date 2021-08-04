import { Box, Card, CardContent, Typography } from "@material-ui/core";
import { BoldText } from "../../components";
import MDEditor from "@uiw/react-md-editor";

const value = `
# hello
こんにちは

## docker
使いましょう！

~~~ruby
puts "hello"
~~~
`;

export const Viewer = ({ loading, data }: any) => {
  console.log(loading, data);
  return (
    <Box width="100%">
      <Card>
        <CardContent>
          {loading ? (
            <p>loading</p>
          ) : (
            <Box display="flex" flexDirection="column" pl={1} pr={1}>
              <Box>
                <BoldText variant="h4">{data.getPostById.title}</BoldText>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Typography>
                  {new Date(data.getPostById.createdAt * 1).toISOString()}
                </Typography>
              </Box>
              <MDEditor.Markdown source={data.getPostById.content} />
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};
