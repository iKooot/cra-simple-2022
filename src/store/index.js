import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import {themeReducer} from './theme/theme.state'
import {productsReducer} from './products/products.state'
import {productReducer} from "./product/product.state"
import {cartReducer} from "./cart/cart.state";
import {rootWatcher} from "./sagas";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        theme: themeReducer,
        products: productsReducer,
        product: productReducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware => getDefaultMiddleware({
        thunk: false,
        serializableCheck: false,
    }).concat(sagaMiddleware))
});

sagaMiddleware.run(rootWatcher)

export default store