import React from "react";
import {
  ListItemText,
  ListItem,
  IconButton,
  Divider,
  Box,
  Typography,
  ButtonGroup,
  Button,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart/cart.state";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export const CartDrawerItem = ({ product, itemNumber }) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.removeProductInOrderList(product));
  };

  const addItemHandler = () => {
    dispatch(cartActions.addProductInOrderList(product));
  };

  const subtractItemHandler = () => {
    dispatch(cartActions.subtractProductInOrderList(product));
  };

  return (
    <>
      <ListItem
        disableGutters
        secondaryAction={
          <Box>
            <IconButton onClick={addItemHandler}>
              <AddCircleIcon />
            </IconButton>
            <IconButton onClick={subtractItemHandler}>
              <RemoveCircleIcon />
            </IconButton>
            <IconButton color="secondary" onClick={removeItemHandler}>
              <Delete />
            </IconButton>
          </Box>
        }
      >
        <ListItemText
          primary={product.title}
          secondary={
            <>
              <Typography component="span" variant="body2"> Amount: {product.count}</Typography>
              <Typography component="span" variant="body2">
                {" "}
                Price: {product.count * product.price}
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider variant="fullWidth" component="li" />
    </>
  );
};
