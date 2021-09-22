import { SignUpPage } from "../SignUpPage/SignUpPage";
import { SignInPage } from "../SignInPage/SignInPage";
import { useHistory } from "react-router";

export const HandlerButton = () => {
  let history = useHistory();
  const handlerClickSignIn = () => {
    history.push("/signIn");
    return <SignInPage />;
  };
  const handlerClickSignUp = () => {
    return <SignUpPage />;
  };
  return (
    <>
      <button type="submit" onClick={handlerClickSignIn}>
        Sign in
      </button>
      <button type="submit" onClick={handlerClickSignUp}>
        Sign up
      </button>
    </>
  );
};
