import { useHistory } from "react-router-dom";
import styles from "./welcomePage.module.css";

export const WelcomePage = () => {
  const history = useHistory();
  return (
    <div className={styles.wrap}>
      <p className={styles.welcomeText}>Welcome!</p>
      <p className={styles.welcomeText}>
        Sign up or sign in to your account to start the game.
      </p>
      <div className={styles.wrapButtons}>
        <button
          type="submit"
          onClick={() => {
            history.push("/SignInPage");
          }}
        >
          Sign in
        </button>
        <button
          type="submit"
          onClick={() => {
            history.push("/SignUpPage");
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};
