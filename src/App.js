import { WelcomePage } from "./pages/WelcomePage/WelcomePage";
import { GamePage } from "./pages/GamePage/GamePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { GameProvider } from "./store/GameContext";
import { MainPage } from "./pages/MainPage/MainPage";
import { SignInPage } from "./pages/SignInPage/SignInPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";

export const App = () => {
  return (
    <GameProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/SignInPage" component={SignInPage} />
          <Route exact path="/SignUpPage" component={SignUpPage} />
          <Route path="/MainPage" component={MainPage} />
          <Route path="/GamePage" component={GamePage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </GameProvider>
  );
};
