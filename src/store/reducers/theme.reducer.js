import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    mode: 'light'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: INITIAL_STATE,
    reducers: {
        toggleTheme(state) {
            if(state.mode === 'light') {
                state.mode = 'dark'
            } else {
                state.mode = 'light'
            }
        }
    }
})

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
