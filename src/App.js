import { WelcomePage } from "./pages/WelcomePage/WelcomePage";
import { GamePage } from "./pages/GamePage/GamePage";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      {/* <Route exact path="/" component={WelcomePage} /> */}
      <Route exact path="/" component={GamePage} />
    </Router>
  );
};
