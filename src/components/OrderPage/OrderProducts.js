import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useOrderTableData } from "../../hooks/useOrderTableData";
import {DeleteButton} from "../UI";
import {removeProductFromOrderList, selectCart} from "../../ducks/cart.duck";

export function OrderProducts() {
  const dispatch = useDispatch();
  const { totalPrice: totalOrderPrice, totalItemsAmount: totalOrderAmount } = useSelector(selectCart);
  const { tableHeaderCalls, orderList } = useOrderTableData();

  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {tableHeaderCalls.map((cell) => (
                <TableCell key={cell.attrs}>{cell.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {orderList.map((product) => (
              <TableRow key={product.id}>
                {tableHeaderCalls.map((cell) => {
                  if (cell.attrs === "photo") {
                    return (
                      <TableCell>
                        <Box component="img" src={product[cell.attrs]} sx={{width: "100px", height: "auto"}}/>
                      </TableCell>
                    );
                  }

                  if (cell.attrs === "remove") {
                    return (
                      <TableCell>
                        <DeleteButton onClick={() => {dispatch(removeProductFromOrderList(product))}} />
                      </TableCell>
                    );
                  }

                  return (
                    <TableCell key={cell.attrs + product.id}>
                      {product[cell.attrs]}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
            <TableRow>
              {tableHeaderCalls.map((cell) => {
                if (cell.attrs === "title") {
                  return <TableCell key={cell.attrs}>Total count:</TableCell>
                }

                if (cell.attrs === "totalPrice") {
                  return <TableCell key={cell.attrs}>{totalOrderPrice}</TableCell>
                }

                if (cell.attrs === "amount") {
                  return <TableCell key={cell.attrs}>{totalOrderAmount}</TableCell>
                }

                return <TableCell key={cell.attrs} />
              })}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
