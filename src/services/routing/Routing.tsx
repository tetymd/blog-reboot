import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "../../domain";

export const Routing = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
};
