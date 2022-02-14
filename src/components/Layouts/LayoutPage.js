import React from "react";
import { Grid } from "@mui/material";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { CartDrawer } from "../Cart";

export const LayoutPage = ({ children }) => {
  return (
    <Grid
      container
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Grid item mb={2}>
        <Header />
        <CartDrawer />
      </Grid>
      <Grid item overflow="hidden">
        {children}
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};
