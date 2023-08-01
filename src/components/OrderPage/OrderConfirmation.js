import React from "react";
import {
  Typography,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";
import { useSelector } from "react-redux";
import { selectCart } from "../../ducks/cart.duck";
import { selectOrder } from "../../ducks/order.duck";
import { useOrderTableData } from "../../hooks/useOrderTableData";
import { CustomerInfo } from "./CustomerInfo";

export const OrderConfirmation = () => {
  const { totalPrice: totalOrderPrice, totalItemsAmount: totalOrderAmount } =
    useSelector(selectCart);
  const { customerInfo } = useSelector(selectOrder);
  const { tableHeaderCalls, orderList } = useOrderTableData();

  return (
    <Grid container spacing={10}>
      <Grid item sm={6}>
        <CustomerInfo customer={customerInfo} />
      </Grid>
      <Grid item sm={6}>
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
                        <TableCell key={cell.attrs + product.id}>
                          <Box
                            component="img"
                            src={product[cell.attrs]}
                            sx={{ width: "100px", height: "auto" }}
                          />
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
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};
