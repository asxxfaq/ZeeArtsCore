import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const addToCart = (item) => {
    setCart((prev) =>
      prev.find((i) => i.id === item.id) ? prev : [...prev, item]
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const addToFav = (item) => {
    setFavourites((prev) =>
      prev.find((fav) => fav.id === item.id) ? prev : [...prev, item]
    );
  };

  const removeFromFav = (id) => {
    setFavourites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        favourites,
        addToCart,
        removeFromCart,
        addToFav,
        removeFromFav,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
