import { useState } from "react";
import { useHistory } from "react-router-dom";

export const SignUpPage = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const handleLogin = async (e) => {
    let userFromStorage = JSON.parse(localStorage.getItem(loginEmail));

    if (userFromStorage && userFromStorage.password === loginPassword) {
      console.log(userFromStorage);
    } else if (userFromStorage && userFromStorage.password !== loginPassword) {
      console.log("не верный пароль");
    } else {
      console.log("пользователя не существует");
    }
  };

  let history = useHistory();
  const testF = () => {
    history.push("/signIn");
  };

  return (
    <>
      <input
        placeholder="Your email"
        type="text"
        value={loginEmail}
        onChange={(e) => {
          setLoginEmail(e.target.value);
        }}
      />
      <input
        placeholder="Your password"
        type="text"
        value={loginPassword}
        onChange={(e) => {
          setLoginPassword(e.target.value);
        }}
      />
      <button type="submit" onClick={handleLogin}>
        Sign up
      </button>

      <div>
        <p>You must log in to view the page at </p>
        <button onClick={testF}>Log in</button>
      </div>
    </>
  );
};
