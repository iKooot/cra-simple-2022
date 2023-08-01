import React from "react";
import { Typography } from "@mui/material";

export const InvalidMessage = ({ error }) => {
  if (!error) return null;

  return (
    <Typography component="p" variant="p" color={"error"}>
      {error.message}
    </Typography>
  );
};
