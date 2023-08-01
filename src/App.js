import React, { Suspense, useEffect } from "react";
import { LayoutPage } from "./components/Layouts";
import { Routes, Route } from "react-router";
import CssBaseline from "@mui/material/CssBaseline";

import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { getDesignTokens } from "./services/material-theme";
import { useDispatch, useSelector } from "react-redux";

import { routesForRender } from "./navigation/routesForRender";
import { Loader } from "./components/UI";
import { selectTheme } from "./ducks/theme.duck";
import { selectOrder, setCustomerInfo } from "./ducks/order.duck";

export function App() {
  const dispatch = useDispatch();
  const { mode } = useSelector(selectTheme);
  const { customerInfo } = useSelector(selectOrder);
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  useEffect(() => {
    const customer = localStorage.getItem("customer");

    if (customerInfo || !customer) {
      localStorage.setItem("customer", JSON.stringify(customerInfo));
    }
  }, [customerInfo]);

  useEffect(() => {
    const customer = localStorage.getItem("customer");

    if (customer) {
      dispatch(setCustomerInfo(JSON.parse(customer)));
    }
  }, []);

  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      <LayoutPage>
        <Suspense fallback={<Loader />}>
          <Routes>
            {routesForRender.map((route) => (
              <Route
                key={route.id}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Routes>
        </Suspense>
      </LayoutPage>
    </ThemeProvider>
  );
}
