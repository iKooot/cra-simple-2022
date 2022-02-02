import {call, put, takeEvery} from 'redux-saga/effects'
import {productsActions} from "../products.state";
import {getProducts} from "../../../api/products";
import {getTotalPagesHelper} from "../../../utils/helpers";

export function* loadProducts() {
    try {
        const products = yield call(getProducts);
        yield put(productsActions.loadProductsSuccess(products))
        yield put(productsActions.setTotalPages(getTotalPagesHelper(products.length, 12)))
    } catch (error) {
        console.error('Saga error')
        yield put(productsActions.loadProductsFailed(error));
    }
}

export function* productsWatcher() {
    yield takeEvery(productsActions.loadProducts, loadProducts)
}