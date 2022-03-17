import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProductsCategories } from "../ducks/products.duck";
import { useQuery } from "react-query";
import { getProductCategories } from "../api/products";

export function useGetCategories() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  const { error, status, data } = useQuery("productsCategories", async () => {
    return await getProductCategories();
  });

  useEffect(() => {
    if (status === "success") {
      setCategories(data);
      dispatch(setProductsCategories(categories));
    }
  }, [status]);

  return {
    error,
    status,
    categories,
  };
}
