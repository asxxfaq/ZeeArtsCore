import { useStore } from "../context/StoreContext";
import "./Favourites.css";

function Favourites() {
  const {
    favourites,
    removeFromFav,
    addToCart,
    cart,
  } = useStore();

  const isInCart = (id) => cart.some(item => item.id === id);

  return (
    <div className="favourites-page">
      <h2>❤️ Your Favourites</h2>

      {favourites.length === 0 ? (
        <p className="empty">No favourites added</p>
      ) : (
        <div className="fav-grid">
          {favourites.map((item) => (
            <div className="fav-card" key={item.id}>
            <div className="fav-image">
              <img src={item.image} alt={item.name} />
            </div>

              <div className="fav-info">
                <h3>{item.name}</h3>
                <p className="price">{item.price}</p>

                <div className="fav-actions">
                  <button
                    className="btn-cart"
                    disabled={isInCart(item.id)}
                    onClick={() => addToCart(item)}
                  >
                    {isInCart(item.id) ? "In Cart ✔" : "Move to Cart 🛒"}
                  </button>

                  <button
                    className="btn-remove"
                    onClick={() => removeFromFav(item.id)}
                  >
                    Remove ❌
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourites;
