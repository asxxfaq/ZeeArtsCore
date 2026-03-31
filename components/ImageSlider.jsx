import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ImageSlider.css";

// ✅ IMPORT IMAGES FROM src/images
import slider1 from "../src/images/slider1.jpg";
import slider2 from "../src/images/slider2.jpg";
import slider3 from "../src/images/slider3.jpg";

const slides = [
  {
    image: slider1,
    title: "Excellence in Every Detail",
    subtitle: "Handcrafted with precision to make your moments unforgettable."
  },
  {
    image: slider2,
    title: "Timeless Luxury Gifts",
    subtitle: "Premium bouquets designed for those who appreciate the finer things."
  },
  {
    image: slider3,
    title: "Pure Elegance, Delivered",
    subtitle: "Bringing the art of boutique floral design straight to your door."
  }
];

function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!slides.length) return null;

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`slide ${index === current ? "active" : ""}`}
        >
          <img src={slide.image} alt={slide.title} />
          <div className="overlay">
            <div className="overlay-content">
              <span className="premium-badge">Exclusive Collection</span>
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <div className="cta-container">
                <Link to="/gallery" className="cta-button">
                  Shop the Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide Indicators */}
      <div className="indicators">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
