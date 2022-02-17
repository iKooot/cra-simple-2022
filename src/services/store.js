import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import cartReducer from "../ducks/cart.duck";
import themeReducer from "../ducks/theme.duck";
import productsReducer from "../ducks/products.duck";
import productReducer from "../ducks/product.duck";
import orderReducer from "../ducks/order.duck";
import { rootWatcher } from "../ducks/saga.rootReducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
    products: productsReducer,
    product: productReducer,
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootWatcher);

export default store;
