// import { WelcomePage } from "./pages/WelcomePage/WelcomePage";
import { GamePage } from "./pages/GamePage/GamePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GameProvider } from "./store/GameContext";

export const App = () => {
  return (
    <GameProvider>
      <Router>
        {/* <Route exact path="/" component={WelcomePage} /> */}
        <Route exact path="/" component={GamePage} />
      </Router>
    </GameProvider>
  );
};
