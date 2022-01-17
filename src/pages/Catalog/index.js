import React from 'react';
import { Typography, Grid} from '@mui/material';
import CatalogList from "../../components/Catalog/CatalogList/CatalogList";
import CatalogFilters from "../../components/Catalog/CatalogFilters/CatalogFilters";

const Catalog = () => {
    return (
        <Grid container marginTop={5} spacing={10}>
            <Grid item xl={3}>
                <Typography mb={5} variant="h3" component="h3">
                    Filters
                </Typography>
                <CatalogFilters/>
            </Grid>
            <Grid item xl={9}>
                <Typography variant="h3" component="h3" marginBottom={5}>
                    Catalog
                </Typography>
                <CatalogList/>
            </Grid>
        </Grid>
    );
};

export default Catalog;