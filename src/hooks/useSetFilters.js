import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductsFilters, selectProducts } from "../ducks/products.duck";

export function useSetFilters() {
  const dispatch = useDispatch();
  const { products } = useSelector(selectProducts);
  const minMaxPrice = useRef([0, 0]);
  const minMaxRating = useRef([0, 0]);

  const [filters, setFilters] = useState({
    byPrice: [0, 0],
    byRating: [0, 0],
    byNew: false,
    bySale: false,
    byStock: false,
    byCategory: [],
  });

  const dispatchFilters = () => {
    dispatch(setProductsFilters(filters));
    setFilters(filters);
  };

  useEffect(() => {
    if (!products) return;

    const prices = products.map((el) => {
      const price = Math.trunc(+el.price);

      return price;
    });

    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    const maxRating = products.reduce((acc, el) => {
      if (acc < el.rating) {
        return el.rating;
      }

      return acc;
    }, 0);

    minMaxPrice.current = [minPrice, maxPrice];

    const roundRating = Math.ceil((maxRating * 5) / 100);
    minMaxRating.current = [0, roundRating];

    setFilters((prevState) => ({
      ...prevState,
      byPrice: [minPrice, maxPrice],
      byRating: [0, roundRating],
    }));
  }, [products]);

  return {
    filters,
    setFilters,
    initialValues: {
      price: minMaxPrice.current,
      rating: minMaxRating.current,
    },
    dispatchFilters,
  };
}
