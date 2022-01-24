import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";

import "../styles/product.css";

let product = {
  id: "151616ax7ax",
  title: "Fall Limited Edition Sneakers",
  brand: "Sneaker Company",
  price: 125,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,veritatis? Alias deleniti quis incidunt nobis fuga laudantium undequisquam",
  thumbnailImages: ["th1.jpg", "th2.jpg", "th3.jpg", "th4.jpg"],
  productImages: ["pimg1.jpg", "pimg2.jpg", "pimg3.jpg", "pimg4.jpg"],
};

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const {
    cart,
    addToCart,
    removeFromCart,
    incrementItem,
    decrementItem,
    handleOverlay,
    showOverlay,
  } = useCartContext();

  let currItem = cart?.find((item) => item.id === product.id);

  return (
    <div className="product">
      <div className="product__images">
        <img
          src={product.productImages[selectedImage]}
          alt="product"
          className="product__images__main"
          onClick={() => handleOverlay(true)}
        />

        <div className="product__images__thumbnail__container">
          {product.thumbnailImages.map((img, idx) => {
            return (
              <img
                src={img}
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`product__images__thumbnail cursor-p ${
                  idx === selectedImage ? "selectedimg" : ""
                }`}
              />
            );
          })}
        </div>
      </div>

      <div className="product__details">
        <p className="product__details__brand">{product.brand}</p>
        <h1 className="product__details__title">{product.title}</h1>

        <p className="product__details__desc">{product.description}</p>

        <div className="flex flex-start">
          <span className="product__details__price">
            $ {product.price.toFixed(2)}
          </span>
          <span className="product__details__discount">50%</span>
        </div>

        <p className="product__details__actualprice">$250</p>

        <div className="product__details__btns">
          <div className="flex flex-start">
            <button
              className="product__details__btn cursor-p"
              onClick={() => decrementItem(product.id)}
            >
              -
            </button>
            <button className="product__details__span">
              {currItem?.qty ?? 0}
            </button>
            <button
              className="product__details__btn cursor-p"
              onClick={() => incrementItem(product.id)}
            >
              +
            </button>
          </div>

          <button className="product__details__addtoCard cursor-p">
            <i className="fas fa-shopping-cart"></i>
            {currItem ? (
              <span onClick={() => removeFromCart(product.id)}>
                Remove from cart
              </span>
            ) : (
              <span onClick={() => addToCart(product)}>Add to cart</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
