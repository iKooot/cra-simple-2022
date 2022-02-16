import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProductsCategory, selectProducts } from "../ducks/products.duck";

export function useGetCategories() {
  const dispatch = useDispatch();
  const {
    productsCategory: { categories, status, error },
  } = useSelector(selectProducts);

  useEffect(async () => {
    if (!categories) {
      dispatch(loadProductsCategory());
    }
  }, [categories]);

  return {
    error,
    status,
    categories,
  };
}
