import React from "react";
import { useCartContext } from "../context/CartContext";

import "../styles/cartModal.css";

const CartModal = () => {
  const { cart } = useCartContext();

  return (
    <div className="cartModal">
      <h3 className="cartModal__header">Cart</h3>
      <div className="cartModal__products__container">
        {cart?.length > 0 ? (
          <>
            {cart.map((item) => {
              return (
                <div className="cartModal__details">
                  <img src={item.thumbnailImages[0]} alt="product" />

                  <div>
                    <p>{item.title}</p>
                    <p>
                      ${item.price.toFixed(2)} x {item.qty}{" "}
                      <strong>${item.price * item.qty}</strong>
                    </p>
                  </div>
                  <i class="fa fa-trash cursor-p" aria-hidden="true"></i>
                </div>
              );
            })}
            <button className="cartModal__checkoutBtn cursor-p">
              Checkout
            </button>
          </>
        ) : (
          <div className="cartModal__details empty flex">
            <p>Your cart is empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
