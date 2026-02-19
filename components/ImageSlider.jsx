import { useEffect, useState } from "react";
import "./ImageSlider.css";

// ✅ IMPORT IMAGES FROM src/images
import slider1 from "../src/images/slider1.jpg";
import slider2 from "../src/images/slider2.jpg";
import slider3 from "../src/images/slider3.jpg";
import overlayImg from "../src/images/overlay.png";

const images = [slider1, slider2, slider3];

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
        <h2>
          <img src={overlayImg} alt="ZeeArtsCore" />
        </h2>
        <p>Beautiful Birthday Bouquet Gifts</p>
      </div>
    </div>
  );
}

export default ImageSlider;
