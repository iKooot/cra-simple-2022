import React from 'react';
import {Typography, Box, Container, Grid, Button} from '@mui/material';
import Navigation from "../Navigation/Navigation";
import SocialIcons from "../SocialIcons/SocialIcons";

const Footer = () => {
    return (
        <Box
            component="footer"
            bgcolor="footer.background"
            color="footer.paragraph"
            p={2}
            sx={{
                boxShadow: '2px 2px 10px rgba(0,0,0, .71)'
            }}
        >
            <Container maxWidth="xl">
                <Grid container sx={{justifyContent: "space-between"}}>
                    <Grid item sx={{display: "flex", alignItems: "center"}}>
                        <Typography variant="p" component="h3">© Cool store</Typography>
                    </Grid>
                    <Grid item sx={{flexGrow: 1, maxWidth: "50%", display: "flex", alignItems: "center"}}>
                        <Navigation/>
                    </Grid>
                    <Grid item sx={{display: "flex", alignItems: "center"}}>
                        <SocialIcons/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;