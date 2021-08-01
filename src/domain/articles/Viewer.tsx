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

export const Viewer = () => {
  return (
    <Box width="100%">
      <Card>
        <CardContent>
          <Box display="flex" flexDirection="column">
            <Box>
              <BoldText variant="h4">title</BoldText>
            </Box>
            <Box display="flex" justifyContent="flex-end">
              <Typography>2021-08-01</Typography>
            </Box>
          </Box>
          <MDEditor.Markdown source={value} />
        </CardContent>
      </Card>
    </Box>
  );
};
