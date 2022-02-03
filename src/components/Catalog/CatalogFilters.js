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
  Switch,
} from "@mui/material";
import { useGetCategories } from "../../hooks/useGetCategories";
import { Loader } from "../UI";
import { Error } from "../Error";

function valuetext(value) {
  return `${value}°C`;
}

export const CatalogFilters = () => {
  const [priceValue, setPriceValue] = React.useState([0, 1000]);
  const [ratingValue, setRatingValue] = React.useState([0, 5]);

  const { categories, status, error } = useGetCategories();

  const handlePriceChange = (event, newValue) => {
    setPriceValue(newValue);
  };

  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue);
  };

  return (
    <form>
      <FormGroup sx={{ gap: "20px", marginBottom: "20px" }}>
        <FormGroup sx={{ maxWidth: "75%" }}>
          <FormLabel sx={{ color: "sectionLight.headline" }} component="legend">
            By price:
          </FormLabel>
          <Slider
            value={priceValue}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            max={1000}
            min={20}
          />
        </FormGroup>
        <FormGroup sx={{ maxWidth: "75%" }}>
          <FormLabel sx={{ color: "sectionLight.headline" }} component="legend">
            By rating:
          </FormLabel>
          <Slider
            value={ratingValue}
            onChange={handleRatingChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            max={5}
            min={0}
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel control={<Switch />} label="By new collection" />
          <FormControlLabel control={<Switch />} label="By sale" />
          <FormControlLabel control={<Switch />} label="By availability" />
          <FormControlLabel control={<Switch />} label="On sale" />
        </FormGroup>
        <FormGroup>
          <FormLabel sx={{ color: "sectionLight.headline" }} component="legend">
            By categories
          </FormLabel>
          {status === "loading" && <Loader />}
          {status === "success" &&
            categories.map((category) => (
              <FormControlLabel
                key={category.name}
                control={<Checkbox name={category.name} />}
                label={category.name}
              />
            ))}
          {status === "error" && <Error errorMessage={error} />}
        </FormGroup>
      </FormGroup>
      <Button variant="contained">Filter</Button>
    </form>
  );
};

export default CatalogFilters;
