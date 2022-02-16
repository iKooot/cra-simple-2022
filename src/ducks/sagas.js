import { all } from "redux-saga/effects";
import { productsWatcher } from "./products.duck";
import { productWatcher } from "./product.duck";

export function* rootWatcher() {
  yield all([productsWatcher(), productWatcher()]);
}
