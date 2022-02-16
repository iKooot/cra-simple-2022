import React from "react";
import { Typography, Grid } from "@mui/material";
import { CatalogList } from "../../components/Catalog";
import CatalogFilters from "../../components/Catalog/CatalogFilters";
import { LightSection } from "../../components/Layouts";
import { useGetProducts } from "../../hooks/useGetProducts";
import { Loader } from "../../components/UI";
import { Error } from "../../components/Error";

const Catalog = () => {
  const { status, error, products } = useGetProducts();

  return (
    <LightSection>
      <Grid container spacing={10}>
        <Grid item xl={3}>
          <Typography
            color="sectionLight.headline"
            mb={5}
            variant="h3"
            component="h3"
          >
            Filters
          </Typography>
          <CatalogFilters />
        </Grid>
        <Grid item xl={9}>
          <Typography
            color="sectionLight.headline"
            variant="h3"
            component="h3"
            marginBottom={5}
          >
            Catalog
          </Typography>
          {status === "loading" && <Loader />}
          {status === "success" && <CatalogList productsList={products} />}
          {status === "error" && <Error errorMessage={error} />}
        </Grid>
      </Grid>
    </LightSection>
  );
};

export default Catalog;
