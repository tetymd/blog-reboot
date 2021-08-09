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
              <TagList tags={data.getPostById.tags} />
              <Box display="flex" mt={1} mb={3} justifyContent="flex-end">
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

const TagList = ({ tags }: any) => {
  const hasTags = tags.length > 0 ? true : false;
  console.log(hasTags, tags);
  return (
    <div>
      {hasTags && (
        <Box display="flex" mt={2}>
          {tags.map((tag: any, index: number) => {
            console.log(index);
            return (
              <Box mr={1} key={index}>
                <Typography>{tag.name}</Typography>
              </Box>
            );
          })}
        </Box>
      )}
    </div>
  );
};
