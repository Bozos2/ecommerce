import React from "react";
import { CartContextState } from "../types";

const cartContext = React.createContext({} as CartContextState);

export default cartContext;
