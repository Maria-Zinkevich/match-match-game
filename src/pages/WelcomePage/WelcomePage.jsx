import { SignUpPage } from "../SignUpPage/SignUpPage";
import { SignInPage } from "../SignInPage/SignInPage";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import styles from "./welcomePage.module.css";

export const WelcomePage = () => {
  return (
    <div className={styles.wrap}>
      <Router>
        <Switch>
          <Route exact path="/">
            <p className={styles.welcomeText}>Welcome!</p>
            <p className={styles.welcomeText}>
              Sign up or sign in to your account to start the game.
            </p>
            <div className={styles.wrapButtons}>
              <Link to="/signIn">
                <button type="submit">Sign in</button>
              </Link>
              <Link to="/signUp">
                <button type="submit">Sign up</button>
              </Link>
            </div>
          </Route>
          <Route path="/signIn">
            <SignInPage />
          </Route>
          <Route path="/signUp">
            <SignUpPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
