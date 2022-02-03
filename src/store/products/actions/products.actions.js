import { createAction } from '@reduxjs/toolkit';

export const loadProducts = createAction('products/load');
export const loadProductsSuccess = createAction('products/load_success');
export const loadProductsFailed = createAction('products/load_failed');

export const loadProductsCategory = createAction('products/load_category');
export const loadProductsCategorySuccess = createAction('products/load_category_success');
export const loadProductsCategoryFailed = createAction('products/load_category_failed');

export const setCurrentPage = createAction('products/set_curren_page');
export const setTotalPages = createAction('products/set_total_pages');