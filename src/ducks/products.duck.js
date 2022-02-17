import { createAction, createSlice } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { getProductCategories, getProducts } from "../api/products";
import { getTotalPagesHelper } from "../utils/helpers";

/***********************************************************
 * DUCK
 ************************************************************/

const initialState = {
  products: null,
  status: "loading",
  error: null,
  productsCategory: {
    status: "loading",
    categories: null,
    error: null,
  },
  filters: {
    byPrice: null,
    byRating: null,
    byNew: false,
    bySale: false,
    byStock: false,
    byCategory: [],
  },
  pagination: {
    currantPage: 1,
    totalPages: 1,
  },
};

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadProductsSuccess: (state, action) => {
      const { payload } = action;
      state.products = payload;
      state.status = "success";
    },
    loadProductsFailed(state, action) {
      const { payload } = action;
      state.error = payload.message;
      state.status = "error";
    },
    loadProductsCategorySuccess(state, action) {
      const { payload } = action;
      state.productsCategory.categories = payload;
      state.productsCategory.status = "success";
    },
    loadProductsCategoryFailed(state, action) {
      const { payload } = action;
      state.productsCategory.error = payload.message;
      state.productsCategory.status = "error";
    },
    setProductsFilters(state, action) {
      const { payload } = action;
      state.filters = { ...payload };
    },
    setCurrentPage(state, action) {
      const { payload } = action;
      state.pagination.currantPage = payload;
    },
    setTotalPages(state, action) {
      const { payload } = action;
      state.pagination.totalPages = payload;
    },
  },
});

const { reducer, actions } = slice;

export default reducer;

export const {
  setTotalPages,
  setProductsFilters,
  loadProductsCategoryFailed,
  loadProductsCategorySuccess,
  setCurrentPage,
  loadProductsSuccess,
  loadProductsFailed,
} = actions;

export const selectProducts = (rootState) => {
  return rootState.products;
};

/***********************************************************
 * SAGAS
 ************************************************************/

export const loadProducts = createAction("products/load_products");
export const loadProductsCategory = createAction("products/load_categories");

function* loadProductsSaga() {
  try {
    const products = yield call(getProducts);
    yield products.forEach((product, i) => {
      const { photo } = product;
      product.photo = `${photo}?v=${i + 1}`;
    });
    yield put(loadProductsSuccess(products));
    yield put(setTotalPages(getTotalPagesHelper(products.length, 12)));
  } catch (error) {
    console.error("Saga error");
    yield put(loadProductsFailed(error));
  }
}

function* loadProductsCategorySaga() {
  try {
    const products = yield call(getProductCategories);
    yield put(loadProductsCategorySuccess(products));
  } catch (error) {
    console.error("Saga error");
    yield put(loadProductsCategoryFailed(error));
  }
}

export function* productsWatcher() {
  yield takeEvery(loadProducts, loadProductsSaga);
  yield takeEvery(loadProductsCategory, loadProductsCategorySaga);
}
