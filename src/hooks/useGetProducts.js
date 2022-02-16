import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectProducts, loadProducts } from "../ducks/products.duck";

export function useGetProducts() {
  const dispatch = useDispatch();
  const productsState = useSelector(selectProducts);
  const { products } = useSelector(selectProducts);

  useEffect(async () => {
    if (!products) {
      await dispatch(loadProducts());
    }
  }, [products]);

  return { ...productsState };
}
