import { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./signUpPage.module.css";

export const SignUpPage = () => {
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");

  const handleSignUp = async () => {
    let userFromStorage = JSON.parse(localStorage.getItem(signUpEmail));

    if (userFromStorage && userFromStorage.email === signUpEmail) {
      console.log(userFromStorage);
    } else if (userFromStorage && userFromStorage.email !== signUpEmail) {
      console.log("не верный email");
    } else {
      console.log("пользователя не существует");
    }
  };

  return (
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
  );
};
