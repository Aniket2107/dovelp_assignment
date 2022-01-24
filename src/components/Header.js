import React, { useState } from "react";

import { useCartContext } from "../context/CartContext";
import CartModal from "./CartModal";
import "../styles/header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const { cart } = useCartContext();

  return (
    <React.Fragment>
      <div className="header flex">
        <div className="header__left flex">
          <img src="/logo.svg" alt="logo" className="cursor-p" />

          <ul className="header__list cursor-p">
            <li>Collection</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="header__right flex">
          <div className="header__cart__container">
            <img
              src="/icon-cart.svg"
              alt="cart"
              className="header__cart cursor-p"
              onMouseOver={() => setShowModal(true)}
              onMouseOut={() => setShowModal(false)}
            />
            {cart?.length > 0 ? (
              <span className="header__cart__span">{cart.length}</span>
            ) : null}
          </div>
          <img
            src="image-avatar.png"
            alt="avatar"
            className="header__avatar cursor-p"
          />
        </div>
      </div>

      {showModal && <CartModal />}
    </React.Fragment>
  );
};

export default Header;
