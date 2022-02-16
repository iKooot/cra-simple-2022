import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderList: [],
  totalPrice: 0,
  totalItemsCount: 0,
  isCartDrawerOpen: false,
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductInOrderList(state, action) {
      const { id, title, price } = action.payload;
      const itemIndex = state.orderList.findIndex(
        (product) => product.id === id
      );

      if (itemIndex < 0) {
        state.orderList.push({
          id,
          title,
          price,
          count: 1,
        });
      } else {
        state.orderList[itemIndex].count += 1;
      }
      state.totalItemsCount += 1;
      state.totalPrice += Number(price);
    },
    subtractProductFromOrderList(state, action) {
      const { payload } = action;
      const itemIndex = state.orderList.findIndex(
        (product) => product.id === payload.id
      );

      state.totalItemsCount -= state.orderList[itemIndex].count;
      state.totalPrice -= state.orderList[itemIndex].price;

      if (state.orderList[itemIndex].count > 1) {
        state.orderList[itemIndex].count -= 1;
      } else {
        state.orderList.splice(itemIndex, 1);
      }
    },
    removeProductFromOrderList(state, action) {
      const { payload } = action;
      const itemIndex = state.orderList.findIndex(
        (product) => product.id === payload.id
      );

      const removePrice =
        state.orderList[itemIndex].count * state.orderList[itemIndex].price;

      state.totalPrice -= removePrice;
      state.totalItemsCount -= state.orderList[itemIndex].count;
      state.orderList.splice(itemIndex, 1);
    },
    clearCart(state) {
      for(let key in state) {
        if (key !== "isCartDrawerOpen") {
          state[key] = initialState[key]
        }
      }
    },
    toggleCartDrawer(state) {
      state.isCartDrawerOpen = !state.isCartDrawerOpen;
    },
  },
});

const { reducer, actions } = slice;

export default reducer;

export const {
  clearCart,
  subtractProductFromOrderList,
  removeProductFromOrderList,
  addProductInOrderList,
  toggleCartDrawer,
} = actions;

export const selectCart = (rootState) => {
  return rootState.cart;
};
