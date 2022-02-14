import React from "react";
import { Drawer, Box, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart/cart.state";
import { useNavigate } from "react-router";

export const CartDrawer = () => {
  const navigate = useNavigate();
  const { isCartDrawerOpen } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const openCartHandler = () => {
    dispatch(cartActions.toggleCartDrawer());
    navigate("/cart");
  };
  return (
    <Drawer
      anchor="right"
      open={isCartDrawerOpen}
      onClose={() => {
        dispatch(cartActions.toggleCartDrawer());
      }}
    >
      <Box
        p={5}
        sx={{
          minWidth: "300px",
        }}
      >
        <Typography variant="h4" component="h3">
          Your order list
        </Typography>
        <Button onClick={openCartHandler}>Open cart</Button>
      </Box>
    </Drawer>
  );
};
