import React from "react";
import { Switch, FormGroup, FormControlLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, selectTheme } from "../../ducks/theme.duck";

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector(selectTheme);

  return (
    <FormGroup>
      <FormControlLabel
        onChange={() => dispatch(toggleTheme())}
        control={<Switch defaultChecked />}
        label={mode}
      />
    </FormGroup>
  );
};
