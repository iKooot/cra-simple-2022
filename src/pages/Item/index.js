import React from 'react';
import {Typography, Button} from '@mui/material';
import { useParams, useNavigate } from "react-router-dom";

const ItemPage = () => {
    const params = useParams()
    const navigate = useNavigate();
    const title = params.cardId.replace(/\-/g, ' ')

    return (
        <>
            <Typography mb={10} variant="h1" component="h1">
                This is "{title}" item
            </Typography>
            <Button variant="contained" onClick={() => {
                navigate('/catalog')
            }}>Go to catalog</Button>
        </>
    );
};

export default ItemPage;