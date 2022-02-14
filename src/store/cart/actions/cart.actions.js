import { createAction } from "@reduxjs/toolkit";

export const toggleCartDrawer = createAction("cart/toggle_cart_drawer");
export const addProductInOrderList = createAction("cart/add-product");
export const removeProductInOrderList = createAction("cart/remove-product");
