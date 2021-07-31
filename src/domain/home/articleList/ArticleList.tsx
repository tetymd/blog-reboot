import { Box } from "@material-ui/core";
import { motion } from "framer-motion";
import { ArticleCard } from "./ArticleCard";

export const ArticleList = ({ data }: any) => {
  return (
    <Box width={{ xs: "100%", sm: "90%", md: "60%", lg: "50%", xl: "50%" }}>
      <ArticleCard
        title="hello"
        tags={["react", "docker", "雑談"]}
        date="2021-07-21"
      />
      <ArticleCard
        title="hello"
        tags={["react", "docker", "雑談"]}
        date="2021-07-21"
      />
      <ArticleCard
        title="hello"
        tags={["react", "docker", "雑談"]}
        date="2021-07-21"
      />
      <ArticleCard
        title="hello"
        tags={["react", "docker", "雑談"]}
        date="2021-07-21"
      />
      <ArticleCard
        title="hello"
        tags={["react", "docker", "雑談"]}
        date="2021-07-21"
      />
      <ArticleCard
        title="hello"
        tags={["react", "docker", "雑談"]}
        date="2021-07-21"
      />
      <ArticleCard
        title="hello"
        tags={["react", "docker", "雑談"]}
        date="2021-07-21"
      />
      <ArticleCard
        title="hello"
        tags={["react", "docker", "雑談"]}
        date="2021-07-21"
      />
      <ArticleCard
        title="hello"
        tags={["react", "docker", "雑談"]}
        date="2021-07-21"
      />
    </Box>
  );
};
