import { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./signInPage.module.css";

export const SignInPage = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    setName("");
    setSurname("");
    setEmail("");

    let user = { name, surname, email };

    if (localStorage.getItem(`${email}`)) {
      alert("A user with this email already exists.");
    } else {
      localStorage.setItem(`${email}`, JSON.stringify(user));
      history.push("/SignUpPage");
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <input
        placeholder="Your name"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        placeholder="Your last name"
        type="text"
        value={surname}
        onChange={(e) => {
          setSurname(e.target.value);
        }}
      />
      <input
        placeholder="Your email"
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button type="submit" form="formLogin" onClick={handleSignIn}>
        Sign in
      </button>
    </form>
  );
};
