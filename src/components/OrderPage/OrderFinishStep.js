import React from "react";
import { Typography } from "@mui/material";

export const OrderFinishStep = () => {
  return (
    <>
      <Typography variant="h3" component="h3" color="sectionLight.headline">
        Your order is sanded
      </Typography>
      <Typography variant="h4" component="p" color="sectionLight.headline">
        Our manager will call to you
      </Typography>
    </>
  );
};
