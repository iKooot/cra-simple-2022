export function toggleCartDrawer(state) {
  state.isCartDrawerOpen = !state.isCartDrawerOpen;
}

export function addProductInOrderList(state, { payload }) {
  const { id, title, price } = payload;
  const itemIndex = state.orderList.findIndex((product) => product.id === id);

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
}

export function subtractProductFromOrderList(state, { payload }) {
  const itemIndex = state.orderList.findIndex((product) => product.id === payload.id);

  state.totalItemsCount -= state.orderList[itemIndex].count;
  state.totalPrice -= state.orderList[itemIndex].price;

  if (state.orderList[itemIndex].count > 1) {
    state.orderList[itemIndex].count -= 1;
  } else {
    state.orderList.splice(itemIndex, 1);
  }
}

export function removeProductFromOrderList(state, { payload }) {
  const itemIndex = state.orderList.findIndex((product) => product.id === payload.id);

  const removePrice = state.orderList[itemIndex].count * state.orderList[itemIndex].price

  state.totalPrice -= removePrice
  state.totalItemsCount -= state.orderList[itemIndex].count
  state.orderList.splice(itemIndex, 1);
}

export function clearCart(state) {
  state.totalItemsCount = 0
  state.totalPrice = 0
  state.orderList = []
}
