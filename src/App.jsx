import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./components/views/HomePage/HomePage";
import LoginPage from "LoginPageMFE/LoginPage";
import RegisterPage from "LoginPageMFE/RegisterPage";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
// import HomePage from "./components/views/HomePage/HomePage";
// import LoginPage from 'LoginPageMFE/LoginPage'
const App = () => (
  <>
   
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
  
  </>
);
ReactDOM.render( <RecoilRoot><App /></RecoilRoot>, document.getElementById("app"));
