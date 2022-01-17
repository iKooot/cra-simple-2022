import React from 'react';
import { Box, Grid, Pagination } from '@mui/material';
import CatalogItem from "../CatalogItem/CatalogItem";

const CatalogList = () => {
    return (
        <Box sx={{display: "flex", alignItems: "center", flexDirection: "column", gap: '40px'}}>
            <Grid container spacing={5}>
                {
                    new Array(12).fill(' ').map( (el, i) => <CatalogItem key={i} attrs={{xl: 4}} />)
                }
            </Grid>
            <Pagination count={10} variant="outlined" color="secondary" />
        </Box>
    );
};

export default CatalogList;