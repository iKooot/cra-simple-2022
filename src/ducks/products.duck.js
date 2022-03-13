import { createAction, createSlice } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { getProductCategories, getProducts } from "../api/products";
import {
  filterProductsByPage,
  getTotalPagesHelper,
  getProductCategoriesById,
} from "../utils/helpers";

/***********************************************************
 * DUCK
 ************************************************************/

const ITEMS_PER_PAGE = 12;

const initialState = {
  products: null,
  status: "loading",
  error: null,
  productsCategory: {
    status: "loading",
    categories: null,
    error: null,
  },
  filteredProducts: [],
  filters: {
    byPrice: null,
    byRating: null,
    byNew: false,
    bySale: false,
    byStock: false,
    byCategory: [],
  },
  pagination: {
    itemsPerPage: [],
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
      state.filteredProducts = payload;
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

      state.filteredProducts = state.products.filter((product) => {
        if (
          !!state.filters.byPrice &&
          Math.trunc(product.price) <= state.filters.byPrice[0]
        ) {
          return false;
        }

        if (
          !!state.filters.byPrice &&
          Math.trunc(product.price) >= state.filters.byPrice[1]
        ) {
          return false;
        }

        if (
          !!state.filters.rating &&
          Math.trunc(product.rating) <= state.filters.rating[0]
        ) {
          return false;
        }

        if (
          !!state.filters.rating &&
          Math.trunc(product.rating) >= state.filters.rating[1]
        ) {
          return false;
        }

        if (state.filters.byNew && !product.isNew) {
          return false;
        }

        if (state.filters.bySale && !product.isSale) {
          return false;
        }

        if (state.filters.byStock && !product.isInStock) {
          return false;
        }

        if (state.filters.byCategory.length > 0) {
          const productCat = getProductCategoriesById(
            state.productsCategory.categories,
            product.categories
          )
            .map((el) => el.name)
            .join("");
          const filtersCat = state.filters.byCategory
            .map((el) => el.name)
            .join("");

          return productCat.includes(filtersCat);
        }

        return true;
      });

      state.pagination.itemsPerPage = filterProductsByPage(
        state.filteredProducts,
        ITEMS_PER_PAGE,
        1
      );
      state.pagination.totalPages = getTotalPagesHelper(
        state.filteredProducts.length,
        ITEMS_PER_PAGE
      );
    },
    setCurrentPage(state, action) {
      const { payload } = action;
      state.pagination.currantPage = payload;
      state.pagination.itemsPerPage = filterProductsByPage(
        state.products,
        ITEMS_PER_PAGE,
        payload
      );
    },
    setPaginationParams(state) {
      state.pagination.itemsPerPage = filterProductsByPage(
        state.filteredProducts,
        ITEMS_PER_PAGE,
        1
      );

      state.pagination.totalPages = getTotalPagesHelper(
        state.filteredProducts.length,
        ITEMS_PER_PAGE
      );
    },
  },
});

const { reducer, actions } = slice;

export default reducer;

export const {
  setProductsFilters,
  loadProductsCategoryFailed,
  loadProductsCategorySuccess,
  setCurrentPage,
  loadProductsSuccess,
  loadProductsFailed,
  setPaginationParams,
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
    yield put(setPaginationParams());
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
