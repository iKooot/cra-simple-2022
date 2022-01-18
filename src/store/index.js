import {configureStore} from '@reduxjs/toolkit'
import {themeReducer} from './theme/theme.state'

const store = configureStore({
    reducer: {
        theme: themeReducer
    }
});

export default store