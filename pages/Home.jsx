import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import Gallery from "./Gallery";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* 🎠 IMAGE SLIDER */}
      <ImageSlider />

      {/* 🌼 FEATURED PRODUCTS */}
      <section className="featured">
        <h2>✨ Featured Bouquets</h2>

        {/* ONLY 4 PRODUCTS */}
        <Gallery limit={3} hideHeader={true} />

        {/* VIEW ALL BUTTON */}
        <div className="view-all">
          <Link to="/gallery" className="view-all-btn">
            View All Bouquets →
          </Link>
        </div>
      </section>

      <section className="hero">
        <h1>ZeeArtsCore 💐</h1>
        <p>
          Handmade Birthday Bouquet Gifts <br />
          Crafted with Love & Care
        </p>
      </section>

      {/* ✨ HIGHLIGHTS */}
      <section className="highlights">
        <div>💐 Fresh Designs</div>
        <div>🎁 Custom Bouquets</div>
        <div>⚡ Fast Delivery</div>
      </section>
    </div>
  );
}

export default Home;
