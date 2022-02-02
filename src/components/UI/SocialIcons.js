import React from "react";
import {List, ListItem, Link} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

export const SocialIcons = () => {
    return (
        <List sx={{display: "flex"}}>
            <ListItem>
                <Link href='/' color="secondary" sx={{display: "flex", alignItems: "center"}}>
                    <FacebookIcon/>
                </Link>
            </ListItem>
            <ListItem>
                <Link href='/' color="secondary" sx={{display: "flex", alignItems: "center"}}>
                    <InstagramIcon/>
                </Link>
            </ListItem>
            <ListItem>
                <Link href='/' color="secondary" sx={{display: "flex", alignItems: "center"}}>
                    <TelegramIcon/>
                </Link>
            </ListItem>
        </List>
    );
};