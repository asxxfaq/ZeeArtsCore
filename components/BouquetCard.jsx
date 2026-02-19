import { useState } from "react";
import "./BouquetCard.css";
import { useStore } from "../context/StoreContext";

function BouquetCard({ bouquet }) {
  const [showImage, setShowImage] = useState(false);

  const {
    cart,
    favourites,
    addToCart,
    removeFromCart,
    addToFav,
    removeFromFav,
  } = useStore();

  const isFavourite = favourites.some((item) => item.id === bouquet.id);
  const isInCart = cart.some((item) => item.id === bouquet.id);

  const handleFav = () => {
    isFavourite ? removeFromFav(bouquet.id) : addToFav(bouquet);
  };

  const handleCart = () => {
    isInCart ? removeFromCart(bouquet.id) : addToCart(bouquet);
  };

  return (
    <div className="card">
      <div className="image-container">
        <img src={bouquet.image} alt={bouquet.name} />

        {/* ❤️ Favourite */}
        <button className="fav-btn" onClick={handleFav}>
          {isFavourite ? "❤️" : "🤍"}
        </button>

        {/* 🔍 View Full Image */}
        <button
          className="search-btn"
          onClick={() => setShowImage(true)}
          title="View Full Image"
        >
          🔍
        </button>
      </div>

      <div className="card-content">
        <h3>{bouquet.name}</h3>
        <p className="price">{bouquet.price}</p>

        <div className="button-group">
          <button className="btn-cart" onClick={handleCart}>
            {isInCart ? "Remove from Cart ❌" : "Add to Cart 🛒"}
          </button>
        </div>
      </div>

      {/* 🌸 Full Image Overlay */}
      {showImage && (
        <div className="image-overlay" onClick={() => setShowImage(false)}>
          <button
            className="close-image"
            onClick={() => setShowImage(false)}
          >
            ❌
          </button>
          <img src={bouquet.image} alt={bouquet.name} />
        </div>
      )}
    </div>
  );
}

export default BouquetCard;
