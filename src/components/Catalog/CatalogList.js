import React, { useEffect, useState } from "react";
import { Box, Grid, Pagination } from "@mui/material";
import { CatalogItem } from "./CatalogItem";
import { usePagination } from "../../hooks/usePagination";
import { useSelector } from "react-redux";
import { getProductCategoriesById } from "../../utils/helpers";
import { selectProducts } from '../../ducks/products.duck'

export const CatalogList = ({ productsList }) => {
  const [filteredProducts, setFilteredProducts] = useState(productsList);
  const { setCurrentPage, totalPages, itemsPerPage } =
    usePagination(filteredProducts);
  const { filters, productsCategory } = useSelector(selectProducts);

  useEffect(() => {
    const filter = productsList.filter((product) => {
      if (
        !!filters.byPrice &&
        Math.trunc(product.price) <= filters.byPrice[0]
      ) {
        return false;
      }

      if (
        !!filters.byPrice &&
        Math.trunc(product.price) >= filters.byPrice[1]
      ) {
        return false;
      }

      if (!!filters.rating && Math.trunc(product.rating) <= filters.rating[0]) {
        return false;
      }

      if (!!filters.rating && Math.trunc(product.rating) >= filters.rating[1]) {
        return false;
      }

      if (filters.byNew && !product.isNew) {
        return false;
      }

      if (filters.bySale && !product.isSale) {
        return false;
      }

      if (filters.byStock && !product.isInStock) {
        return false;
      }

      if (filters.byCategory.length > 0) {
        const productCat = getProductCategoriesById(
          productsCategory.categories,
          product.categories
        )
          .map((el) => el.name)
          .join("");
        const filtersCat = filters.byCategory.map((el) => el.name).join("");

        return productCat.includes(filtersCat);
      }

      return true;
    });

    setFilteredProducts(filter);
  }, [filters]);

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
          <CatalogItem key={i} product={product} id={i + 1} attrs={{ xl: 4 }} />
        ))}
      </Grid>
      {totalPages > 1 && (
        <Pagination
          onChange={paginationHandler}
          count={totalPages}
          variant="outlined"
          color="secondary"
        />
      )}
    </Box>
  );
};
