import { NavLink } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import "./Navbar.css";

function Navbar() {
  const { cart, favourites } = useStore();

  return (
    <>
      {/* TOP STRIP */}
      <div className="top-strip">
        <span>Complimentary Gift Wrapping on Orders Above ₹5,000</span>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="tanishq-navbar">
        {/* BRAND LOGO AREA */}
        <div className="brand-area">
          <div className="brand-ornament left">
            <span className="ornament-line" />
            <span className="ornament-diamond" />
            <span className="ornament-line" />
          </div>
          <NavLink to="/" className="brand-logo">
            <span className="brand-name">Zee Arts</span>
            <span className="brand-tagline">Fine Art Collection</span>
          </NavLink>
          <div className="brand-ornament right">
            <span className="ornament-line" />
            <span className="ornament-diamond" />
            <span className="ornament-line" />
          </div>
        </div>

        {/* NAV LINKS */}
        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            end
          >
            <span className="link-text">Home</span>
            <span className="link-underline" />
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="link-text">Gallery</span>
            <span className="link-underline" />
          </NavLink>

          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="link-text">Favourites</span>
            {favourites.length > 0 && (
              <span className="nav-badge">{favourites.length}</span>
            )}
            <span className="link-underline" />
          </NavLink>

          <a
            href="https://ig.me/m/zeeartscore"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            <span className="link-text">Connect</span>
            <span className="link-underline" />
          </a>
        </div>

        {/* ACTION ICONS */}
        <div className="nav-actions">
          {/* Wishlist */}
          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              isActive ? "action-btn active" : "action-btn"
            }
            aria-label="Favourites"
          >
            <svg className="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {favourites.length > 0 && (
              <span className="action-badge">{favourites.length}</span>
            )}
          </NavLink>

          {/* Cart */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "action-btn active" : "action-btn"
            }
            aria-label="Cart"
          >
            <svg className="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cart.length > 0 && (
              <span className="action-badge">{cart.length}</span>
            )}
          </NavLink>

          {/* Instagram DM */}
          <a
            href="https://ig.me/m/zeeartscore"
            target="_blank"
            rel="noreferrer"
            className="action-btn"
            aria-label="Instagram"
          >
            <svg className="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </nav>

      {/* DECORATIVE BORDER */}
      <div className="navbar-divider">
        <span className="divider-line" />
        <span className="divider-motif">◆</span>
        <span className="divider-line" />
      </div>
    </>
  );
}

export default Navbar;