import {
  Box,
  Card,
  CardContent,
  makeStyles,
  Typography
} from "@material-ui/core";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { BoldText } from "../../../components";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "rgba(204,204,255,0.6)"
    }
  }
});

export const ArticleCard = ({ articleId, title, tags, date }: any) => {
  console.log(title, tags);
  // console.log(tags.length);
  const history = useHistory();
  const classes = useStyles();
  const TagList =
    tags.length > 0
      ? tags.map((tag: any) => {
          return (
            <Box mr={1} key={tag}>
              <Typography variant="body2">{tag.name}</Typography>
            </Box>
          );
        })
      : null;

  const handleLink = (path: any) => history.push(path);
  return (
    <motion.div whileTap={{ scale: 0.98 }}>
      <Card
        className={classes.root}
        onClick={() => handleLink(`/articles/${articleId}`)}
      >
        <CardContent>
          <BoldText variant="h6">{title}</BoldText>
          {tags.length > 0 ? <Box display="flex">{TagList}</Box> : null}
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Typography variant="caption">{date}</Typography>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};
