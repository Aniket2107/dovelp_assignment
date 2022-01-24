import React, { useState, useContext } from "react";

export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);

  const addToCart = (cartItem) => {
    const foundItem = cart.find((item) => item.id === cartItem.id);
    if (foundItem) {
      let newCart = cart.map((item) => {
        if (item.id === cartItem.id) {
          item.qty += 1;
        }
        return item;
      });
      setCart(newCart);
    } else {
      let temp = [...cart, { ...cartItem, qty: 1 }];
      setCart(temp);
    }
  };

  const handleOverlay = (value) => {
    setShowOverlay(value);
  };

  const removeFromCart = (itemID) => {
    let newCart = cart.filter((item) => item.id !== itemID);
    setCart(newCart);
  };

  const incrementItem = (itemID) => {
    let newCart = cart.map((item) => {
      if (item.id === itemID) {
        item.qty += 1;
      }
      return item;
    });

    setCart(newCart);
  };

  const decrementItem = (itemID) => {
    let newCart = cart.map((item) => {
      if (item.id === itemID && item.qty > 1) {
        item.qty -= 1;
        if (item.qty < 0) {
          item.qty = 0;
        }
      }
      return item;
    });

    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementItem,
        decrementItem,
        showOverlay,
        handleOverlay,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export default CartProvider;
