import React, { useState } from "react";
import "./LoginPage.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //login redirect to homepage
        history.push("./");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create account and get user to login
        history.push("./");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <main className="login">
      <Link to="/">
        <div className="login__logo">
          <img
            className="login__image"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </div>
      </Link>

      <div className="login__container">
        <h1>Login</h1>
        <h5>Email</h5>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h5>Password</h5>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" onClick={login}>
          Sign In
        </button>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login__button2" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </main>
  );
}

export default LoginPage;
