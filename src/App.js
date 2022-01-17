import React from 'react';
import LayoutPage from "./components/Layouts/LayoutPage";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import NotFound from "./pages/NotFound";
import CssBaseline from "@mui/material/CssBaseline";
import About from "./pages/About";

import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { getDesignTokens } from "./services/material-theme";
import {useSelector} from "react-redux";
import Contacts from "./pages/Contacts";
import ItemPage from "./pages/Item";


export function App() {
    const {mode} = useSelector( store => store.theme);

    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    return (
        <ThemeProvider theme={responsiveFontSizes(theme)}>
          <LayoutPage>
              <CssBaseline />
              <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/catalog" element={<Catalog />} exact/>
                  <Route path="/catalog/:cardId" element={<ItemPage />} />
                  <Route path="/contacts" element={<Contacts />}/>
                  <Route path="/"  exact={true} element={<Home />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </LayoutPage>
        </ThemeProvider>
    );
}
