import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/views/Header/Header";
import Navbar from "./components/views/Navbar/Navbar";
import Hero from './components/views/Hero/Hero'
import "./index.css";
import Footer from "./components/views/Footer/Footer";
// import HomePage from "./components/views/HomePage/HomePage";
// import LoginPage from 'LoginPageMFE/LoginPage'
const App = () => (
  <div >
    <Header />
    <Navbar />
   <Hero/>
   <Footer/>
   {/* <HomePage/> */}
   {/* <LoginPage/> */}
   {/* <LoginPage/> */}
    {/* <Banner4>
    <button>Shop Now</button>
   </Banner4> */}
    {/* <ProductCard /> */}
    {/* <LoginPage />  */}
    {/* <RegisterPage />*/}
   
    {/* <Banner4>{<Text variant='text-lg'>Shop Now</Text>}
    {<button>Hurry</button>}</Banner4> */}
    {/* {productData.map((x, id) => {
      return (<>

        <Banner4 {...x}>
        </Banner4>
      </>)
    })} */}

  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
