import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";

import "../styles/imageoverlay.css";

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

const ImageOverlay = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const { handleOverlay } = useCartContext();

  const handleClick = (action) => {
    if (action === "+") {
      setSelectedImage(
        (prevVal) => (prevVal + 1) % product.productImages.length
      );
    } else {
      setSelectedImage((prevVal) =>
        prevVal === 0 ? product.productImages.length - 1 : prevVal - 1
      );
    }
  };

  return (
    <div className="main__overlay">
      <div className="backdrop"></div>
      <div className="overlay-content">
        <i
          className="fas fa-times overlay-cancel cursor-p"
          id="cancel-btn"
          tabIndex={1}
          onClick={() => handleOverlay(false)}
        ></i>
        <div className="imgage-div">
          <i
            className="fas fa-angle-left imgage-btn image-back"
            onClick={() => handleClick("-")}
          ></i>
          <img
            src={product.productImages[selectedImage]}
            alt="product"
            className="overlay-content-image"
          />

          <i
            className="fas fa-angle-right imgage-btn image-ahead"
            onClick={() => handleClick("+")}
          ></i>
          <div className="overlay-content-thumbnail-container">
            {product.thumbnailImages.map((img, idx) => {
              return (
                <img
                  src={img}
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`overlay-content-thumbnail-image cursor-p ${
                    idx === selectedImage ? "selectedimg" : ""
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlay;
