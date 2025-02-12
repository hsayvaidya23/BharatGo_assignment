import { createContext, useReducer, useContext } from "react";

const ShoppingCartContext = createContext<any>(null);

const initialState = {
  cart: [],
  order: [],
  filteredItems: [],
  searchTitleBar: "",
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((item: { id: any }) => item.id !== action.payload) };
    case "SET_FILTERED_ITEMS":
      return { ...state, filteredItems: action.payload };
    case "SET_SEARCH_TITLE_BAR":
      return { ...state, searchTitleBar: action.payload };
    default:
      return state;
  }
};

const ShoppingCartProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShoppingCartContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

const useShoppingCart = () => useContext(ShoppingCartContext);

export { ShoppingCartProvider, useShoppingCart };