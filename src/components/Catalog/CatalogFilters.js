import React from "react";
import {
  Box,
  Button,
  ListItem,
  Typography,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  FormLabel,
  Radio,
  Switch
} from "@mui/material";

function valuetext(value) {
  return `${value}°C`;
}

export const CatalogFilters = () => {
  const [priceValue, setPriceValue] = React.useState([0, 1000]);
  const [ratingValue, setRatingValue] = React.useState([0, 5]);

  const handlePriceChange = (event, newValue) => {
    setPriceValue(newValue);
  };

  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue);
  };

  return (
    <form>
      <FormGroup sx={{ gap: "20px", marginBottom: "20px" }}>
        <Box maxWidth="75%">
          <FormLabel component="legend">By price:</FormLabel>
          <Slider
            value={priceValue}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            max={1000}
            min={20}
          />
        </Box>
        <Box maxWidth="75%">
          <FormLabel component="legend">By rating:</FormLabel>
          <Slider
            value={ratingValue}
            onChange={handleRatingChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            max={5}
            min={0}
          />
        </Box>
        <FormGroup>
          <FormControlLabel control={<Switch />} label="New collection" />
        </FormGroup>
      </FormGroup>
      <Button variant="contained">Filter</Button>
    </form>
  );
};

export default CatalogFilters;
