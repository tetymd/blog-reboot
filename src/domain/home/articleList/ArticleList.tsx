import { Box, ListItemAvatar } from "@material-ui/core";
import { ArticleCard } from "./ArticleCard";

export const ArticleList = ({ loading, data }: any) => {
  console.log(data);
  return (
    <Box width={{ xs: "100%", sm: "90%", md: "60%", lg: "50%", xl: "50%" }}>
      {loading ? (
        <p>loading</p>
      ) : (
        data.getPosts.posts.map((item: any) => {
          console.log(item.createdAt);
          return (
            <ArticleCard
              articleId={item.id}
              title={item.title}
              tags={["react", "docker", "雑談"]}
              date={new Date(item.createdAt * 1).toISOString()}
              key={item.id}
            />
          );
        })
      )}
    </Box>
  );
};
