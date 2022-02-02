import React from 'react';
import {Box, Typography} from '@mui/material'

export const Error = ({errorMessage}) => {
    return (
        <Box>
            <Typography color="error.main">
                {errorMessage}
            </Typography>
        </Box>
    );
};