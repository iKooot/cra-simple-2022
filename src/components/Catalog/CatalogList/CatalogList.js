import React from 'react';
import { Typography, Grid } from '@mui/material';
import CatalogItem from "../CatalogItem/CatalogItem";

const CatalogList = () => {
    return (
        <Grid container spacing={5}>
            {
                new Array(12).fill(' ').map( (el, i) => <CatalogItem key={i} attrs={{xl: 4}} />)
            }
        </Grid>
    );
};

export default CatalogList;