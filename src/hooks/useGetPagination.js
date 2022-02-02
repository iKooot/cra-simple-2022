import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { productsActions } from "../store/products/products.state";

export function useGetPagination(initialItems, itemsPerPage = 12) {
  const [items, setItems] = useState(initialItems);
  const {totalPages, currantPage} = useSelector((state) => state.products.pagination);
  const dispatch = useDispatch();

  function setCurrentPage(page) {
    dispatch(productsActions.setCurrentPage(page));
  }

  useEffect(() => {
    const filteredItems = initialItems.filter((el, i) => {

      if(currantPage === 1) {
        return i <= itemsPerPage - 1
      }

      if(currantPage !== 1) {
        const index = currantPage * itemsPerPage
        return  i >= ( index + 1 ) - itemsPerPage &&  i <= index
      }
    });

    setItems(filteredItems);
  }, [currantPage, totalPages]);

  return {
    setCurrentPage,
    currantPage,
    totalPages,
    itemsPerPage: items,
  };
}
