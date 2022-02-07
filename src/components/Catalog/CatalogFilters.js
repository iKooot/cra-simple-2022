import React, { useEffect } from "react";
import {
  Button,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormLabel,
  Switch,
} from "@mui/material";
import { useGetCategories } from "../../hooks/useGetCategories";
import { Loader } from "../UI";
import { Error } from "../Error";
import { useSetFilters } from "../../hooks/useSetFilters";

function valuetext(value) {
  return `${value}°C`;
}

export const CatalogFilters = () => {
  const { filters, setFilters, initialValues, dispatchFilters } =
    useSetFilters();
  const { categories, status, error } = useGetCategories();

  const changeHandler = (event, newValue) => {
    setFilters((prevState) => ({
      ...prevState,
      [event.target.name]: newValue,
    }));
  };

  const categoryChangeHandler = (event, newValue) => {
    setFilters((prevState) => {
      const checkedCategories = [...prevState.byCategory];
      const checkboxIndex = checkedCategories.findIndex(
        (el) => el.name === event.target.name
      );
      if (checkboxIndex < 0) {
        checkedCategories.push({
          name: event.target.name,
          id: event.target.id,
        });
      } else {
        checkedCategories.splice(checkboxIndex, 1);
      }
      return {
        ...prevState,
        byCategory: checkedCategories,
      };
    });
  };

  const submitFilters = () => {
    dispatchFilters();
  };

  return (
    <form>
      <FormGroup sx={{ gap: "20px", marginBottom: "20px" }}>
        <FormGroup sx={{ maxWidth: "75%" }}>
          <FormLabel sx={{ color: "sectionLight.headline" }} component="legend">
            By price:
          </FormLabel>
          <Slider
            name="byPrice"
            value={filters.byPrice}
            onChange={changeHandler}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            max={initialValues.price[1]}
            min={initialValues.price[0]}
          />
        </FormGroup>
        <FormGroup sx={{ maxWidth: "75%" }}>
          <FormLabel sx={{ color: "sectionLight.headline" }} component="legend">
            By rating:
          </FormLabel>
          <Slider
            name="byRating"
            value={filters.byRating}
            onChange={changeHandler}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            max={initialValues.rating[1]}
            min={initialValues.rating[0]}
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                value={filters.byNew}
                name="byNew"
                onChange={changeHandler}
              />
            }
            label="By new collection"
          />
          <FormControlLabel
            control={
              <Switch
                value={filters.bySale}
                name="bySale"
                onChange={changeHandler}
              />
            }
            label="By sale"
          />
          <FormControlLabel
            control={
              <Switch
                value={filters.byStock}
                name="byStock"
                onChange={changeHandler}
              />
            }
            label="By stock"
          />
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
                control={
                  <Checkbox
                    checked={
                      !!filters.byCategory.find((el) => el.id === category.id)
                    }
                    name={category.name}
                    id={category.id}
                    onChange={categoryChangeHandler}
                  />
                }
                label={category.name}
              />
            ))}
          {status === "error" && <Error errorMessage={error} />}
        </FormGroup>
      </FormGroup>
      <Button onClick={submitFilters} variant="contained">
        Filter
      </Button>
    </form>
  );
};

export default CatalogFilters;
