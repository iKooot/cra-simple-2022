import React from "react";
import { Box, Grid, Pagination } from "@mui/material";
import { CatalogItem } from "./CatalogItem";
import { CatalogPagination } from "./CatalogPagination";

export const CatalogList = ({ productsList }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <Grid container spacing={5}>
        {productsList.map((product, i) => (
          <CatalogItem key={i} product={product} id={i + 1} attrs={{ xl: 4 }} />
        ))}
      </Grid>
      <CatalogPagination />
    </Box>
  );
};
