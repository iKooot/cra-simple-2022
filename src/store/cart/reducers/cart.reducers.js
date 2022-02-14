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
  state.totalItemsCount += Number(price);
}
