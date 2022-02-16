import React from "react";
import { Drawer, Box, Typography} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartDrawer } from "../../ducks/cart.duck";
import { CartDrawerList } from "./CartDrawerList";

export const CartDrawer = () => {
  const dispatch = useDispatch();
  const { isCartDrawerOpen } = useSelector((state) => state.cart);

  return (
    <Drawer
      anchor="right"
      open={isCartDrawerOpen}
      onClose={() => {
        dispatch(toggleCartDrawer());
      }}
    >
      <Box
        p={5}
        sx={{
          minWidth: "400px",
        }}
      >
        <Typography variant="h4" component="h3">
          Your order list
        </Typography>
        <CartDrawerList />
      </Box>
    </Drawer>
  );
};
