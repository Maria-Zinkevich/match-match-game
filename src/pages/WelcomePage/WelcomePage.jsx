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

export const WelcomePage = () => {
  let history = useHistory();
  const handleSignIn = () => {
    history.replace("/signIn");
  };

  //   const handleLogin = () => {};

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <h1>Hello!</h1>
            <p>Do you want to play?</p>
            <p>Let's start!</p>

            <Link to="/signIn">
              <button type="submit">Sign in</button>
            </Link>
            <Link to="/signUp">
              <button type="submit">Sign up</button>
            </Link>
          </Route>
          <Route path="/signIn">
            <SignInPage />
          </Route>
          <Route path="/signUp">
            <SignUpPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

// import React from "react";
// import { HandlerButton } from "./HandlerButton";

// export const WelcomePage = () => {
//   const history = useHistory();

//   const testF = () => {
//     history.push("/signIn");
//   };
//   function PublicPage() {
//     return <h3>Public</h3>;
//   }
//   return (
//     <Router>
//       {/* <button onClick={handleClick} type="button" /> */}
//       <HandlerButton />
//       <Switch>
//         <Route exact path="/"></Route>
//         <Route path="/signIn">
//           <SignInPage />
//         </Route>
//         <Route path="/signUp">
//           <SignUpPage />
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

// export default WelcomePage;
