import {call, put, takeEvery} from 'redux-saga/effects'
import {productActions} from "../product.state";
import {getProductById} from "../../../api/products";

export function* loadProduct({payload}) {
    try {
        const product = yield call(getProductById, payload);
        yield put(productActions.loadProductSuccess(product))
    } catch (error) {
        yield put(productActions.loadProductFailed(error));
    }
}

export function* productWatcher() {
    yield takeEvery(productActions.loadProduct, loadProduct)
}