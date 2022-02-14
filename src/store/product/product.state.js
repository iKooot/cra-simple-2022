import {createReducer} from "@reduxjs/toolkit";
import * as productReducers from './reducers/product.reducers';
import * as productActions from './actions/product.actions'

export const INITIAL_STATE = {
    product: null,
    status: 'loading',
    error: null
}

const productReducer = createReducer(INITIAL_STATE, (builder) => {
    builder.addCase(productActions.loadProductSuccess, productReducers.loadProductSuccess)
    builder.addCase(productActions.loadProductFailed, productReducers.loadProductFailed)
})

export {productReducer, productActions}