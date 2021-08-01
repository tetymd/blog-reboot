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
  const history = useHistory();
  const classes = useStyles();
  const TagList = tags.map((tag: any) => {
    return (
      <Box mr={1} key={tag}>
        <Typography variant="body2">{tag}</Typography>
      </Box>
    );
  });

  const handleLink = (path: any) => history.push(path);
  return (
    <motion.div whileTap={{ scale: 0.98 }}>
      <Card
        className={classes.root}
        onClick={() => handleLink(`/articles/${articleId}`)}
      >
        <CardContent>
          <BoldText variant="h6">{title}</BoldText>
          <Box display="flex">{TagList}</Box>
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Typography variant="caption">{date}</Typography>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};
