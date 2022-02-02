import React from 'react';
import {List, ListItem} from '@mui/material';
import {MyNavLink} from "../UI";
import { routesConfig } from '../../navigation/routesConfig'

export const Navigation = () => {
    return (
        <nav style={{width: "100%"}}>
           <List sx={{display: 'flex', justifyContent: "space-between"}}>
               {routesConfig.filter( route => route.id !== 'cart' && route.id !== '404' && route.id !== 'product').map( route => (
                   <ListItem key={route.id} sx={{ justifyContent: "center"}}>
                       <MyNavLink path={route.path}>{route.pageTitle}</MyNavLink>
                   </ListItem>
               ))}
           </List>
        </nav>
    );
};