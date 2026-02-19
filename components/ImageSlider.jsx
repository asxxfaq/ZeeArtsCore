import { useEffect, useState } from "react";
import "./ImageSlider.css";

const images = [
  "/images/Slider1.jpg", 
  "/images/Slider2.jpg",
  "/images/Slider3.jpg"
];

function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

 
  if (!images.length) return null;

  return (
    <div className="slider">
      <img 
        key={current} 
        src={images[current]} 
        alt={`Bouquet Slide ${current + 1}`} 
        className="fade-in" 
      />
      <div className="overlay">
        <h2><img src="/images/overlay.png" alt="ZeeArtsCore" /></h2>
        <p>Beautiful Birthday Bouquet Gifts</p>
      </div>
    </div>
  );
}

export default ImageSlider;