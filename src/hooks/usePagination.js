import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  setCurrentPage,
  setTotalPages,
  selectProducts,
} from "../ducks/products.duck";
import { getTotalPagesHelper } from "../utils/helpers";

export function usePagination(initialItems, itemsPerPage = 12) {
  const [items, setItems] = useState(initialItems);
  const {
    pagination: { totalPages, currantPage },
  } = useSelector(selectProducts);
  const dispatch = useDispatch();

  function setCurrentPageHandler(page) {
    dispatch(setCurrentPage(page));
  }

  useEffect(() => {
    const filteredItems = initialItems.filter((el, i) => {
      if (currantPage === 1) {
        return i <= itemsPerPage - 1;
      }

      if (currantPage !== 1) {
        const index = currantPage * itemsPerPage;
        return i >= index + 1 - itemsPerPage && i <= index;
      }
    });

    setItems(filteredItems);
  }, [currantPage]);

  useEffect(() => {
    dispatch(setTotalPages(getTotalPagesHelper(initialItems.length, 12)));
  }, [initialItems]);

  return {
    setCurrentPage: setCurrentPageHandler,
    currantPage,
    totalPages,
    itemsPerPage: items,
  };
}
