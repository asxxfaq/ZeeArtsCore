import { LuFlower2, LuSearch } from "react-icons/lu";
import bouquets from "../data/bouquets";
import BouquetCard from "../components/BouquetCard";
import "./Gallery.css";

function Gallery({ limit, hideHeader = false }) {
  const items = limit ? bouquets.slice(0, limit) : bouquets;

  return (
    <section className="gallery-section">
      {!hideHeader && (
        <div className="gallery-header">
          <LuFlower2 className="gallery-icon" />
          <h2>Our Bouquet Gallery</h2>
          <p>Explore our handcrafted birthday collections</p>
        </div>
      )}

      <div className="gallery-grid">
        {items.map((item) => (
          <div className="gallery-item" key={item.id}>
            <BouquetCard bouquet={item} />

            <div className="hover-overlay">
              <LuSearch className="view-icon" />
              <span>View Details</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
