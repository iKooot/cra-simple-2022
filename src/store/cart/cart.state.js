import { createReducer } from "@reduxjs/toolkit";
import * as cartActions from "./actions/cart.actions";
import * as cartReducers from "./reducers/cart.reducers";

export const INITIAL_STATE = {
  orderList: [],
  totalPrice: 0,
  totalItemsCount: 0,
  isCartDrawerOpen: false,
};

const cartReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(cartActions.toggleCartDrawer, cartReducers.toggleCartDrawer);
  builder.addCase(cartActions.addProductInOrderList, cartReducers.addProductInOrderList);
});

export { cartReducer, cartActions };
