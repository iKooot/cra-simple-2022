import { createSlice, createAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { getProductById } from "../api/products";

/***********************************************************
 * DUCK
 ************************************************************/

const initialState = {
  product: null,
  status: "loading",
  error: null,
};

const slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadProductSuccess(state, action) {
      const { payload } = action;
      state.product = payload;
      state.status = "success";
    },

    loadProductFailed(state, action) {
      const { payload } = action;
      state.error = payload.message;
      state.status = "error";
    },
  },
});

const { reducer, actions } = slice;

export default reducer;

export const { loadProductFailed, loadProductSuccess } = actions;

export const selectProduct = (rootState) => {
  return rootState.product;
};

/***********************************************************
 * SAGAS
 ************************************************************/

export const loadProduct = createAction('product/load_product')

function* loadProductSaga({ payload }) {
  try {
    const product = yield call(getProductById, payload);
    yield put(loadProductSuccess(product));
  } catch (error) {
    yield put(loadProductFailed(error));
  }
}

export function* productWatcher() {
  yield takeEvery(loadProduct, loadProductSaga);
}
