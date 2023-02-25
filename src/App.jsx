import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/views/Header/Header";
import Navbar from "./components/views/Navbar/Navbar";
import Hero from './components/views/Hero/Hero'
import "./index.css";
import Footer from "./components/views/Footer/Footer";
import Category from "./components/views/Category/Category";
import HomePage from "./components/views/HomePage/HomePage";
// import HomePage from "./components/views/HomePage/HomePage";
// import LoginPage from 'LoginPageMFE/LoginPage'
const App = () => (
  <div >
    <Header />
    <Navbar />
   <Hero/>
   <Category/>
    <HomePage/>
   <Footer/>

  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
