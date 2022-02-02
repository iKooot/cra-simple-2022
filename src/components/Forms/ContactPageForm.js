import React from "react";
import { Box, Button, TextField } from "@mui/material";

export const ContactPageForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <TextField
        label="Enter your first name"
        id="name"
        defaultValue=""
        size="small"
        placeholder="Max Pain"
      />
      <TextField
        label="Enter your email"
        id="email"
        defaultValue=""
        size="small"
        placeholder="example@some.com"
      />
      <TextField
        label="Enter your phone"
        id="phone"
        defaultValue=""
        size="small"
        placeholder="+380XXXXXXXXX"
      />
      <Button
        sx={{ maxWidth: "30%" }}
        type="submit"
        onSubmit={submitHandler}
        variant="contained"
      >
        Send
      </Button>
    </Box>
  );
};
