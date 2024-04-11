import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import PickersTime from "./BookingForm";

const Slider = ({ images, autoplayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoplayInterval);

    return () => clearInterval(intervalId);
  }, [images.length, autoplayInterval]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider_form-wrap relative">
      <div className="carousel-container">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentIndex ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        <div className="carousel-controls">
          {/* <button className="carousel-control-prev" onClick={handlePrev}>
          Prev
        </button>
        <button className="carousel-control-next" onClick={handleNext}>
          Next
        </button> */}
        </div>
      </div>

   
    </div>
  );
};

export default Slider;
