import {all} from 'redux-saga/effects'
import {productsWatcher} from "./products/sagas/products.sagas";
import {productWatcher} from "./product/sagas/product.sagas";

export function* rootWatcher() {
    yield all([productsWatcher(),productWatcher()])
}