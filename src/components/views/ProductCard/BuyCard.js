import React from "react";
import "./Global.css";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { cartValueAtom } from "../../../Recoil";





const BuyCard = ({ menuData }) => {




  const [cartItem, setCartItem] = useState([]);
  const setValues = useSetRecoilState(cartValueAtom);
 
  const cartValue = JSON.parse(localStorage.getItem("Cart"));
  let Length = cartValue.length;
  function handleShop(id) {
    const Cart = menuData?.filter((item, i) => i == id);
    setCartItem([...cartItem, ...Cart]);
    setValues(Length);
  }
   localStorage.setItem("Cart", JSON.stringify(cartItem));
  return (
    <>
      <section className="main-card--cointainer">
        {menuData?.map((curElem, i) => {
          const { id, name, category, image, description } = curElem;
          return (
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  {/* <span className="card-number card-circle subtle">{id}</span> */}
                  <span className="card-author subtle">{category}</span>
                  <h2 className="card-title">{name}</h2>
                  {/* <span className="card-description subtle">
                {description}
                </span> */}
                  <img src={image} alt="Dosa" className="card-media" />
                  <button
                    className="card-tag subtle"
                    onClick={() => handleShop(i)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default BuyCard;
