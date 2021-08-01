import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Articles } from "../../domain";

export const Routing = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/articles/:id" component={Articles} />
    </Router>
  );
};
