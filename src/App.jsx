import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/views/Footer/Footer";
import Header from "./components/views/Header/Header";
import Hero from "./components/views/Hero/Hero";
import HomePage from "./components/views/HomePage/HomePage";
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
      {/* <LoginPage/> */}
      {/* <RegisterPage/> */}
      <Footer />
    </>
    
);
ReactDOM.render(<App />, document.getElementById("app"));
