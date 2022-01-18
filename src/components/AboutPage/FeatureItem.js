import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const FeatureItem = ({title = 'Some title', text = 'Custom text', icon}) => {
    return (
        <Paper elevation={3} sx={{bgcolor: 'cardLight.background', color: 'cardLight.paragraph', padding: '8px', display: "flex", flexDirection: "column", gap: '20px'}}>
            <Box sx={{alignSelf: "center"}}>
                {icon ?? <CheckIcon/>}
            </Box>
            <Typography align="center" variant="h6" component="h3" color="cardLight.heading">
                {title}
            </Typography>
            <Typography variant="p" component="p">
                {text}
            </Typography>
        </Paper>
    );
};

export default FeatureItem;