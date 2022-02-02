import React from "react";
import { Container, Box } from "@mui/material";

export const ContainerLayout = ({ children, attrs }) => {
  return (
    <Box {...attrs} paddingY={20}>
      <Container maxWidth="xl">{children}</Container>
    </Box>
  );
};
