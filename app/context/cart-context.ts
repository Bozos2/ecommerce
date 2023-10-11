import React from "react";
import { CartContextStateType } from "../types";

const cartContextStateDefaultValues: CartContextStateType = {
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearItems: () => {},
  updateItemAmount: (id, newAmount) => {},
};

const CartContext = React.createContext<CartContextStateType>(
  cartContextStateDefaultValues
);

export { CartContext };
