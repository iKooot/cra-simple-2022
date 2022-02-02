import {createReducer} from "@reduxjs/toolkit";

export const INITIAL_STATE = {
    order: null
}

const cartReducer = createReducer(INITIAL_STATE, (builder) => {
})

export {cartReducer}