import { useReducer } from "react";

import cartContext from "./cart-context";
import { CartItem, CartAction, ActionType } from "../types";

type DefaultData = {
  items: CartItem[];
  totalAmount: number;
};

const defaultCartState: DefaultData = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: DefaultData, action: CartAction) => {
  switch (action.type) {
    case ActionType.ADD:
      const updatedTotalAmount = state.totalAmount + action.item.price;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case ActionType.REMOVE:
      const existingCartItemIndex1 = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existingCartItemIndex1];
      const itemPrice = parseFloat(existingItem.price);
      const updatedTotalAmount1 = state.totalAmount - itemPrice;
      let updatedItems1;
      if (existingItem.amount === 1) {
        updatedItems1 = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems1 = [...state.items];
        updatedItems1[existingCartItemIndex1] = updatedItem;
      }
      return {
        items: updatedItems1,
        totalAmount: updatedTotalAmount1,
      };
  }
  return defaultCartState;
};

const cartProvider = () => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
};
