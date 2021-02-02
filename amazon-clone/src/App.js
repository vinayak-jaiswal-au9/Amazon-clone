import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  // useEffect
  // piece of code for running whice runs of given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is login
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logout
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    // cleansup operation
    return () => {
      unsubscribe();
    };
  }, []);

  console.log(`User is : ${user}`);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
