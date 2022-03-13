import React from "react";
import { Pagination } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, setCurrentPage } from "../../ducks/products.duck";

export function CatalogPagination() {
  const {
    pagination: { totalPages = 1 },
  } = useSelector(selectProducts);
  const dispatch = useDispatch();

  const paginationHandler = (e, page) => {
    dispatch(setCurrentPage(page));
  };

  if (totalPages <= 1) return null;

  return (
    <Pagination
      onChange={paginationHandler}
      count={totalPages}
      variant="outlined"
      color="secondary"
    />
  );
}
