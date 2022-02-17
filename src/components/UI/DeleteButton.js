import React from 'react';
import {IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";

export function DeleteButton({ onClick }) {
  return (
    <IconButton color="secondary" onClick={onClick}>
      <Delete />
    </IconButton>
  );
}