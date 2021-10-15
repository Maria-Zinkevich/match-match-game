import { useHistory } from "react-router-dom";
import { useGameState } from "../../store/GameContext";
import styles from "./signUpPage.module.css";

export const SignUpPage = () => {
  const gameStates = useGameState();
  const history = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();

    let userFromStorage = JSON.parse(
      localStorage.getItem(gameStates.userEmail)
    );

    if (
      userFromStorage.name === gameStates.userName &&
      userFromStorage.email === gameStates.userEmail
    ) {
      history.push("/MainPage");
    } else {
      alert("The user does not exist.");
      history.push("/SignInPage");
    }
  };

  return (
    <div className={styles.wrap}>
      <form onSubmit={handleSignUp}>
        <input
          placeholder="Your name"
          type="text"
          value={gameStates.userName}
          onChange={(e) => {
            gameStates.setUserName(e.target.value);
          }}
        />
        <input
          placeholder="Your email"
          type="text"
          value={gameStates.userEmail}
          onChange={(e) => {
            gameStates.setUserEmail(e.target.value);
          }}
        />
        <button type="submit" onClick={handleSignUp}>
          Sign up
        </button>
      </form>
    </div>
  );
};
