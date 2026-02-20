import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaInstagram } from "react-icons/fa";
import { LuMenu, LuX, LuShoppingCart, LuHeart } from "react-icons/lu";
import { GrGallery } from "react-icons/gr";
import { useStore } from "../context/StoreContext";
import logo from "../src/images/logo.jpg";   // ✅ IMPORT IMAGE
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, favourites } = useStore();

  return (
    <nav className="navbar">

      {/* BRAND */}
      <div className="nav-brand">
        <img
          src={logo}
          alt="ZeeArtsCore Logo"
          className="logo"
        />
        <div>
          <h2>ZeeArtsCore</h2>
          <small>Bouquet Birthday Gifts</small>
        </div>
      </div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <LuX size={28} /> : <LuMenu size={28} />}
      </div>

      {/* NAV CONTENT */}
      <div className={`nav-actions ${isOpen ? "show" : ""}`}>

        {/* LINKS */}
        <ul className="nav-links">
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              <FaHome size={20} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" onClick={() => setIsOpen(false)}>
              <GrGallery size={20} />
            </NavLink>
          </li>
        </ul>

        {/* ❤️ FAVOURITES */}
        <NavLink
          to="/favourites"
          className="nav-icon-wrapper"
          onClick={() => setIsOpen(false)}
        >
          <LuHeart size={24} />
          {favourites.length > 0 && (
            <span className="badge">{favourites.length}</span>
          )}
        </NavLink>

        {/* 🛒 CART */}
        <NavLink
          to="/cart"
          className="nav-icon-wrapper"
          onClick={() => setIsOpen(false)}
        >
          <LuShoppingCart size={24} />
          {cart.length > 0 && (
            <span className="badge">{cart.length}</span>
          )}
        </NavLink>

        {/* WHATSAPP */}
        <a
          href="https://ig.me/m/zeeartscore"
          target="_blank"
          rel="noreferrer"
          className="instagram-btn"
        >
          <FaInstagram size={24} />
          <span>Order Now</span> {/* Optional text, you can remove the span if you only want the icon */}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
