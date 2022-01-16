import React from 'react';
import {Button, List, ListItem} from '@mui/material';
import {navigation} from '../../utils/navigation';
import NavLink from "../UI/NavLink/NavLink";

const HeaderNavigation = () => {
    return (
        <nav style={{width: "100%"}}>
           <List sx={{display: 'flex', justifyContent: "space-between"}}>
               {navigation.filter( el => el.label !== 'Home').map( page => (
                   <ListItem key={page.path} sx={{ justifyContent: "center"}}>
                       <NavLink path={page.path}>{page.label}</NavLink>
                   </ListItem>
               ))}
           </List>
        </nav>
    );
};

export default HeaderNavigation;