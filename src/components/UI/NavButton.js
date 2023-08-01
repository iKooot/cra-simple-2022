import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export const NavButton = ({ attrs, to = "/", children }) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(to);
  };

  return (
    <Button onClick={onClickHandler} {...attrs}>
      {children}
    </Button>
  );
};
