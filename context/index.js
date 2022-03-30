import { createContext } from "react";
import { useState, useEffect } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [state, setState] = useState({
    basketCount: 0,
  });

  const setBasketCount = (count) => {
    setState({
      ...state,
      basketCount: count,
    });
  };

  useEffect(() => {
    if (localStorage.getItem("cartItems")) {
      setState({
        ...state,
        basketCount: JSON.parse(localStorage.getItem("cartItems")).length,
      });
    }
  }, []);

  return (
    <Context.Provider value={{ ...state, setBasketCount }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
