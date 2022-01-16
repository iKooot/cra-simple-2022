import React from 'react';
import {Box} from "@mui/material";
import {NavLink as RoutingNavLink} from "react-router-dom";
import classes from './NavLink.module.css'

const NavLink = ({children, path = '/', attrs}) => {
    return (
        <Box {...attrs}>
            <RoutingNavLink className={classes.link} to={path}>
                {children}
            </RoutingNavLink>
        </Box>
    );
};

export default NavLink;