import {createReducer} from "@reduxjs/toolkit";
import * as themeReducers from './reducers/theme.reducers';
import * as themeActions from './actions/theme.actions'

export const INITIAL_STATE = {
    mode: 'dark'
}

const themeReducer = createReducer(INITIAL_STATE, (builder) => {
    builder.addCase(themeActions.toggleTheme, themeReducers.toggleTheme)
})

export {themeReducer, themeActions}