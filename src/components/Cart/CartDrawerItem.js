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
import { addProductInOrderList, removeProductFromOrderList, subtractProductFromOrderList } from "../../ducks/cart.duck";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export const CartDrawerItem = ({ product, itemNumber }) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(removeProductFromOrderList(product));
  };

  const addItemHandler = () => {
    dispatch(addProductInOrderList(product));
  };

  const subtractItemHandler = () => {
    dispatch(subtractProductFromOrderList(product));
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
