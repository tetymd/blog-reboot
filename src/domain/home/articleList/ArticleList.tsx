import { Box, ListItemAvatar } from "@material-ui/core";
import { ArticleCard } from "./ArticleCard";

export const ArticleList = ({ loading, data }: any) => {
  console.log(loading, data);
  return (
    <Box width={{ xs: "100%", sm: "90%", md: "60%", lg: "50%", xl: "50%" }}>
      {loading ? (
        <p>loading</p>
      ) : (
        data.getPosts[0].posts.map((item: any) => {
          return (
            <ArticleCard
              articleId={item.id}
              title={item.title}
              tags={item.tags}
              date={new Date(item.createdAt * 1).toISOString()}
              key={item.id}
            />
          );
        })
      )}
    </Box>
  );
};
