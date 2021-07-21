import { motion, AnimatePresence } from "framer-motion";
import { UserInfo } from "./UserInfo";

export const Profile = ({ isVisible, callback }: any) => {
  console.log("isvisible", isVisible);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background:
              "linear-gradient(180deg, rgba(142,203,222,1) 0%, rgba(142,222,197,1) 100%)"
          }}
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          exit={{ x: "100vw", opacity: 0 }}
          onClick={callback}
        >
          <UserInfo />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
