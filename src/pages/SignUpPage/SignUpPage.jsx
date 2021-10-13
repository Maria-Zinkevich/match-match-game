import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useGameState } from "../../store/GameContext";
import styles from "./signUpPage.module.css";

export const SignUpPage = () => {
  const gameStates = useGameState();
  const history = useHistory();
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    let userFromStorage = JSON.parse(localStorage.getItem(signUpEmail));

    if (
      userFromStorage.name === signUpName &&
      userFromStorage.email === signUpEmail
    ) {
      history.push("/MainPage");
      gameStates.setUserName(userFromStorage.name);
    } else {
      alert("The user does not exist.");
    }
  };

  return (
    <div className={styles.wrap}>
      <form onSubmit={handleSignUp}>
        <input
          placeholder="Your name"
          type="text"
          value={signUpName}
          onChange={(e) => {
            setSignUpName(e.target.value);
          }}
        />
        <input
          placeholder="Your email"
          type="text"
          value={signUpEmail}
          onChange={(e) => {
            setSignUpEmail(e.target.value);
          }}
        />
        <button type="submit" onClick={handleSignUp}>
          Sign up
        </button>
      </form>
    </div>
  );
};
