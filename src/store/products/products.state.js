import {createReducer} from "@reduxjs/toolkit";
import * as productsReducers from './reducers/products.reducers';
import * as productsActions from './actions/products.actions'

export const INITIAL_STATE = {
    products: null,
    status: 'loading',
    error: null,
    filters: {
        byPrice: null,
        byRating: null,
        byNew: false,
        bySale: false,
        byAvailability: false,
        byCategory: null,
    },
    pagination: {
        currantPage: 1,
        totalPages: 1,
    }
}

const productsReducer = createReducer(INITIAL_STATE, (builder) => {
    builder.addCase(productsActions.loadProductsSuccess, productsReducers.loadProductsSuccess)
    builder.addCase(productsActions.loadProductsFailed, productsReducers.loadProductsFailed)
    builder.addCase(productsActions.setCurrentPage, productsReducers.setCurrentPage)
    builder.addCase(productsActions.setTotalPages, productsReducers.setTotalPages)
})

export {productsReducer, productsActions}