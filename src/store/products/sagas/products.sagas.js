import {call, put, takeEvery} from 'redux-saga/effects'
import {productsActions} from "../products.state";
import {getProductCategories, getProducts} from "../../../api/products";
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

export function* loadProductsCategory() {
    try {
        const products = yield call(getProductCategories);
        yield put(productsActions.loadProductsCategorySuccess(products))
    } catch (error) {
        console.error('Saga error')
        yield put(productsActions.loadProductsCategoryFailed(error));
    }
}

export function* productsWatcher() {
    yield takeEvery(productsActions.loadProducts, loadProducts)
    yield takeEvery(productsActions.loadProductsCategory, loadProductsCategory)
}