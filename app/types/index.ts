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
  id: string;
  src: string;
  category: string;
  subcategory: string;
  title: string;
  colors: string[];
  price: number;
}

export interface SaleProduct {
  id: string;
  src: string;
  category: string;
  subcategory: string;
  title: string;
  colors: string[];
  price: number;
  oldprice: number;
  percentage: number;
}

export interface CartItem {
  id: string;
  src: string;
  title: string;
  color: string;
  price: number;
  amount: number | 1;
}

export enum ActionType {
  ADD,
  REMOVE,
  CLEAR,
  UPDATE_VALUE,
}

export interface AddToCartAction {
  type: ActionType.ADD;
  item: CartItem;
}

export interface RemoveFromCartAction {
  type: ActionType.REMOVE;
  id: string;
}

export interface UpdateItemAmountAction {
  type: ActionType.UPDATE_VALUE;
  id: string;
  newAmount: number;
}

export type CartAction =
  | AddToCartAction
  | RemoveFromCartAction
  | UpdateItemAmountAction;

export interface CartContextStateType {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateItemAmount: (id: string, newAmount: number) => void;
}
