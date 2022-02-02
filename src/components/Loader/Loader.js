import React from "react";
import classes from "./Loader.module.css";
import { Box } from "@mui/material";

export const Loader = () => {
  return (
    <Box sx={{display: "flex", justifyContent: "center"}}>
      <div className={classes["lds-roller"]}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </Box>
  );
};
