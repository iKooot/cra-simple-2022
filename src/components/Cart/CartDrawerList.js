import React from "react";
import { Button, ButtonGroup, List, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CartDrawerItem } from "./CartDrawerItem";
import { cartActions } from "../../store/cart/cart.state";
import { useNavigate } from "react-router";

export const CartDrawerList = () => {
  const { orderList, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openCartHandler = () => {
    dispatch(cartActions.toggleCartDrawer());
    navigate("/cart");
  };

  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };
  return (
    <List>
      {orderList.length > 0 &&
        orderList.map((product, index) => (
          <CartDrawerItem
            key={product.id}
            itemNumber={index + 1}
            product={product}
          />
        ))}
      {orderList.length !== 0 && (
        <>
          <Typography marginTop={5} variant="body1" component="li">
            Total price: {totalPrice}
          </Typography>
          <Typography marginTop={5} component="li">
            <ButtonGroup>
              <Button variant="contained" onClick={openCartHandler}>
                Open cart
              </Button>
              <Button onClick={clearCartHandler}>Clear cart</Button>
            </ButtonGroup>
          </Typography>
        </>
      )}
      {orderList.length === 0 && (
        <Typography variant="body1" component="li">
          You haven`t order now
        </Typography>
      )}
    </List>
  );
};