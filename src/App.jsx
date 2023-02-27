import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./components/views/HomePage/HomePage";
import LoginPage from "LoginPageMFE/LoginPage";
import RegisterPage from "LoginPageMFE/RegisterPage";
import { BrowserRouter } from "react-router-dom";
// import HomePage from "./components/views/HomePage/HomePage";
// import LoginPage from 'LoginPageMFE/LoginPage'
const App = () => (
  <>
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
