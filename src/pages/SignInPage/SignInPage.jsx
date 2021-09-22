import { useState } from "react";

export const SignInPage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    setName("");
    setSurname("");
    setEmail("");
    setPassword("");

    let user = { name, surname, email, password };

    if (localStorage.getItem(`${email}`)) {
      console.log("пользователь c таким email уже существует");
    } else {
      localStorage.setItem(`${email}`, JSON.stringify(user));
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
      <input
        placeholder="Your password"
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit" form="formLogin" onClick={handleSignIn}>
        Sign in
      </button>
    </form>
  );
};
