import React from "react";
import { Box, Link } from "@mui/material";
import { NavLink as RoutingNavLink } from "react-router-dom";

export const MyNavLink = ({ children, path = "/", attrs }) => {
  return (
    <Box {...attrs}>
      <Link
        underline="none"
        to={path}
        sx={{
          color: "text.primary",
          "&.active": { color: "secondary.main", textDecoration: "underline" },
        }}
        component={RoutingNavLink}
      >
        {children}
      </Link>
    </Box>
  );
};
