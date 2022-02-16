import React, { Suspense } from "react";
import { LayoutPage } from "./components/Layouts";
import { Routes, Route } from "react-router";
import CssBaseline from "@mui/material/CssBaseline";

import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { getDesignTokens } from "./services/material-theme";
import { useSelector } from "react-redux";

import { routesForRender } from "./navigation/routesForRender";
import { Loader } from "./components/UI";
import { selectTheme } from "./ducks/theme.duck";

export function App() {
  const { mode } = useSelector(selectTheme);
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

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
