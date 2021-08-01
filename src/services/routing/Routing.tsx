import { Box } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "../../components";
import { Home, Articles } from "../../domain";

export const Routing = () => {
  return (
    <Router>
      <Header />
      <Box mt={8}>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles/:id" component={Articles} />
      </Box>
    </Router>
  );
};
