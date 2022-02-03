import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {productsActions} from "../store/products/products.state";

export function useGetCategories() {
  const dispatch = useDispatch()
  const {categories, status, error} = useSelector( state => state.products.productsCategory)

  useEffect(async () => {
    if (!categories) {
      dispatch(productsActions.loadProductsCategory())
    }

  }, [categories]);

  return {
    error,
    status,
    categories,
  };
}
