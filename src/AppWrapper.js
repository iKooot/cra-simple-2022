import React from 'react';
import { App } from './App'
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from "./services/material-theme";
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store/index';

export function AppWrapper() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {/*<ThemeProvider theme={lightTheme}>*/}
                    <App />
                {/*</ThemeProvider>*/}
            </BrowserRouter>
        </Provider>
    );
}
