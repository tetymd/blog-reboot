import { Box, Avatar, Typography, styled } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import { BoldText } from "../theme";
import { motion } from "framer-motion";

const UserInfoAnimation = ({ children }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: [0, 0, 0, 1.15, 1] }}
      transition={{ duration: 1, easings: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export const UserInfo = () => {
  return (
    <Box m={4} display="flex" flexDirection="column" alignItems="center">
      <UserInfoAnimation>
        <Box mt={12} mb={4} display="flex" justifyContent="center">
          <motion.div
            style={{
              position: "relative",
              top: 0,
              left: 0,
              width: 100,
              height: 100,
              background: "#8888AA",
              borderRadius: 100
            }}
            animate={{ x: [0, 0, 0, 10], y: [0, 0, 0, 10] }}
            transition={{ duration: 1.5 }}
          />
          <Avatar
            style={{
              position: "absolute",
              width: 100,
              height: 100
            }}
            alt="Tetsuya Yamada"
            src="/icon.jpg"
          />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <BoldText variant="h5">Tetsuya Yamada</BoldText>
          <BoldText variant="body1">Web Developer</BoldText>
        </Box>
      </UserInfoAnimation>
      <UserInfoAnimation>
        <Box mt={4}>
          <GitHubIcon style={{ fontSize: 40, color: "#333333" }} />
          <TwitterIcon
            style={{ fontSize: 40, color: "#55acee", marginLeft: 24 }}
          />
        </Box>
      </UserInfoAnimation>
    </Box>
  );
};
