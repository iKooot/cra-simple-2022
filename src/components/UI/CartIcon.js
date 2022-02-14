import React from "react";
import { Badge, IconButton } from "@mui/material";
import { cartActions } from "../../store/cart/cart.state";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const CartIcon = () => {
  const dispatch = useDispatch();
  const { totalItemsCount } = useSelector((state) => state.cart);
  return (
    <IconButton
      aria-label="cart"
      onClick={() => {
        dispatch(cartActions.toggleCartDrawer());
      }}
    >
      <StyledBadge badgeContent={totalItemsCount} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};
