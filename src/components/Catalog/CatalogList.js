import React, { useEffect, useState } from "react";
import { Box, Grid, Pagination } from "@mui/material";
import { CatalogItem } from "./CatalogItem";
import { useGetPagination } from "../../hooks/useGetPagination";

export const CatalogList = ({ productsList }) => {
  const [filteredProducts, setFilteredProducts] = useState(productsList);
  const { setCurrentPage, totalPages, itemsPerPage } = useGetPagination(filteredProducts);

  const paginationHandler = (e, page) => {
    setCurrentPage(page);
  };

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
        {itemsPerPage.map((product, i) => (
          <CatalogItem
            key={i}
            product={product}
            id={i + 1}
            attrs={{ xl: 4, minHeight: "400px" }}
          />
        ))}
      </Grid>
      <Pagination
        onChange={paginationHandler}
        count={totalPages}
        variant="outlined"
        color="secondary"
      />
    </Box>
  );
};
