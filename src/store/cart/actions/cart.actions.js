import { createAction } from "@reduxjs/toolkit";

export const toggleCartDrawer = createAction("cart/toggle_cart_drawer");
export const addProductInOrderList = createAction("cart/add_product");
export const removeProductInOrderList = createAction("cart/remove_product");
export const subtractProductInOrderList = createAction("cart/subtract_product");
export const clearCart = createAction("cart/clear");
