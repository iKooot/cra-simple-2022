import React from "react";
import { Badge, IconButton } from "@mui/material";
import { toggleCartDrawer, selectCart } from "../../ducks/cart.duck";
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
  const { totalItemsAmount } = useSelector(selectCart);
  return (
    <IconButton
      aria-label="cart"
      onClick={() => {
        dispatch(toggleCartDrawer());
      }}
    >
      <StyledBadge badgeContent={totalItemsAmount} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};
