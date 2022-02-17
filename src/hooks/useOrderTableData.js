import { useDispatch, useSelector } from "react-redux";
import { loadProducts, selectProducts } from "../ducks/products.duck";
import { useEffect } from "react";
import { selectCart } from "../ducks/cart.duck";

export function useOrderTableData() {
  const { products } = useSelector(selectProducts);
  const { orderList } = useSelector(selectCart);
  const dispatch = useDispatch();

  const tableHeaderCalls = [
    { title: "Photo", attrs: "photo" },
    { title: "Title", attrs: "title" },
    { title: "Price", attrs: "price" },
    { title: "Amount", attrs: "amount" },
    { title: "Total price", attrs: "totalPrice" },
    { title: "", attrs: "remove" },
  ];

  useEffect(() => {
    if (products) return;
    console.log("here");
    dispatch(loadProducts());
  }, [dispatch]);

  const orderItemsList = products
    ? products.reduce((acc, product) => {
        orderList.forEach((orderProduct) => {
          if (orderProduct.id === product.id) {
            acc.push({
              ...product,
              amount: orderProduct.amount,
              totalPrice: orderProduct.price * orderProduct.amount,
            });
          }
        });

        return acc;
      }, [])
    : [];

  return {
    tableHeaderCalls,
    orderList: orderItemsList,
  };
}
