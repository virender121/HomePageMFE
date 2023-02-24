import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/views/Header/Header";
import LoginPage from "./components/views/LoginPage/LoginPage";
import Navbar from "./components/views/Navbar/Navbar";
import Hero from './components/views/Hero/Hero'
import { ProductCard } from "./components/views/ProductCard/ProductCard";
import "./index.css";
import Text from './components/views/Text/Text'
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Banner4 from "./components/views/Banner4/Banner4";
import MyButton from './components/views/MyButton/MyButton'
import { productData } from './Constdata/mockdata'
const App = () => (
  <div >
    <Header />
    <Navbar />
     <Hero />
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
