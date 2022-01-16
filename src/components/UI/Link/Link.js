import React from 'react';
import {Box} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import classes from './Link.module.css'

const Link = ({children, path = '/'}) => {
    return (
        <Box color="text.primary">
            <RouterLink className={classes.link} to={path}>{children}</RouterLink>
        </Box>
    );
};

export default Link;