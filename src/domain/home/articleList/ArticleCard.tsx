import { Box, Card, CardContent, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import { BoldText } from "../../../components";

export const ArticleCard = ({ title, tags, date }: any) => {
  console.log(tags);
  const TagList = tags.map((tag: any) => {
    return (
      <Box mr={1} key={tag}>
        <Typography variant="body2">{tag}</Typography>
      </Box>
    );
  });
  return (
    <motion.div whileTap={{ scale: 0.98 }}>
      <Card>
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
