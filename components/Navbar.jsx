import { NavLink } from "react-router-dom";
import { FaHome, FaInstagram } from "react-icons/fa";
import { LuShoppingCart, LuHeart } from "react-icons/lu";
import { GrGallery } from "react-icons/gr";
import { useStore } from "../context/StoreContext";
import "./Navbar.css";

function Navbar() {
  const { cart, favourites } = useStore();

  return (
    <div className="floating-nav-container">
      <nav className="pill-navbar">
        
        {/* HOME */}
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          <FaHome size={24} />
        </NavLink>

        {/* GALLERY */}
        <NavLink 
          to="/gallery" 
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          <GrGallery size={22} />
        </NavLink>

        {/* ❤️ FAVOURITES */}
        <NavLink 
          to="/favourites" 
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          <LuHeart size={24} />
          {favourites.length > 0 && (
            <span className="badge">{favourites.length}</span>
          )}
        </NavLink>

        {/* 🛒 CART */}
        <NavLink 
          to="/cart" 
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          <LuShoppingCart size={24} />
          {cart.length > 0 && (
            <span className="badge">{cart.length}</span>
          )}
        </NavLink>

        {/* WHATSAPP / INSTAGRAM */}
        <a
          href="https://ig.me/m/zeeartscore"
          target="_blank"
          rel="noreferrer"
          className="nav-item"
        >
          <FaInstagram size={24} />
        </a>

      </nav>
    </div>
  );
}

export default Navbar;