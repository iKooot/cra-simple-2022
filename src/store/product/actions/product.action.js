import { createAction } from '@reduxjs/toolkit';

export const loadProduct = createAction('product/load');
export const loadProductSuccess = createAction('product/load_success');
export const loadProductFailed = createAction('product/load_failed');