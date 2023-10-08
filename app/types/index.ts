export interface RUser {
  _id?: string;
  email: string;
  fullName: string;
  gender: string;
}

export interface LoginUserData {
  email: string;
  password: string;
}

export interface ProductProps {
  src: string;
  category: string;
  subcategory: string;
  title: string;
  colors: string[];
  price: string;
}

export interface CartItem {
  id: string;
  src: string;
  title: string;
  color: string;
  price: string;
  amount: number | 1;
}

export enum ActionType {
  ADD,
  REMOVE,
  CLEAR,
}

export interface AddToCartAction {
  type: ActionType.ADD;
  item: CartItem;
}

export interface RemoveFromCartAction {
  type: ActionType.REMOVE;
  id: string;
}

export interface ClearCartAction {
  type: ActionType.CLEAR;
}

export type CartAction =
  | AddToCartAction
  | RemoveFromCartAction
  | ClearCartAction;

export interface CartContextState {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearItems: () => void;
}
