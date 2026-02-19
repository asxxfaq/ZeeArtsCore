import { useStore } from "../context/StoreContext";
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart } = useStore();

  const totalPrice = cart.reduce((sum, item) => {
    const priceNumber = Number(
      item.price.replace(/[^0-9]/g, "")
    );
    return sum + priceNumber;
  }, 0);

  const whatsappMessage = encodeURIComponent(
    `Hello, I want to place an order:\n\n` +
      cart
        .map(
          (item, index) =>
            `${index + 1}. ${item.name} - ${item.price}`
        )
        .join("\n") +
      `\n\nTotal: ₹${totalPrice}`
  );

  return (
    <div className="cart-page">
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty">No items in cart</p>
      ) : (
        <>
          <div className="cart-grid">
            {cart.map((item) => (
              <div className="cart-card" key={item.id}>
                <div className="cart-image">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p className="price">{item.price}</p>

                  <button
                    className="btn-remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ₹{totalPrice}</h3>

            <a
              className="btn-order"
              href={`https://wa.me/91XXXXXXXXXX?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Proceed to Order 💬
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
