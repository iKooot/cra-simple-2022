import React from 'react';
import {Typography} from '@mui/material';
import { useParams } from "react-router-dom";

const ItemPage = () => {
    const params = useParams()
    return (
        <Typography variant="h1" component="h1">
            This is "{params.cardId}" item
        </Typography>
    );
};

export default ItemPage;