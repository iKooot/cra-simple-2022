import {configureStore} from '@reduxjs/toolkit'
import themeReducer from './reducers/theme.reducer'

const store = configureStore({
    reducer: {
        theme: themeReducer
    }
});

export default store