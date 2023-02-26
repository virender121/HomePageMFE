import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/views/Footer/Footer";
import Header from "./components/views/Header/Header";
import Hero from "./components/views/Hero/Hero";
import HomePage from "./components/views/HomePage/HomePage";
import Navbar from "./components/views/Navbar/Navbar";
import "./index.css";

// import HomePage from "./components/views/HomePage/HomePage";
// import LoginPage from 'LoginPageMFE/LoginPage'
const App = () => (
    <>
      <Header />
      <Navbar />
      <Hero />
      <HomePage />
      {/* <LoginPage/> */}
      {/* <RegisterPage/> */}
      <Footer />
      {/* <Navbar/> */}
      {/* <Resturant/> */}
      {/* <MenuCard/> */}
    </>
    
);
ReactDOM.render(<App />, document.getElementById("app"));
