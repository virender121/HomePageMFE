import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/views/Header/Header";
import Navbar from "./components/views/Navbar/Navbar";
import Hero from "./components/views/Hero/Hero";
import "./index.css";
import Footer from "./components/views/Footer/Footer";
import HomePage from "./components/views/HomePage/HomePage";
import { RecoilRoot } from "recoil";
import LoginPage from 'LoginPageMFE/LoginPage'
import RegisterPage from 'LoginPageMFE/RegisterPage'

// import HomePage from "./components/views/HomePage/HomePage";
// import LoginPage from 'LoginPageMFE/LoginPage'
const App = () => (
    <>
      <Header />
      <Navbar />
      <Hero />
      <HomePage />
      <LoginPage/>
      <RegisterPage/>
      <Footer />
      {/* <Navbar/> */}
      {/* <Resturant/> */}
      {/* <MenuCard/> */}
    </>
    
);
ReactDOM.render(<App />, document.getElementById("app"));
