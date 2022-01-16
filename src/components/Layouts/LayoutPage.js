import React from 'react';
import { Container, Grid, Toolbar, Box } from '@mui/material'
import Header from '../Header/Header'
import Footer from "../Footer/Footer";


const LayoutPage = ({children}) => {
    return (
        <Grid container sx={{
            height: '100vh',
            display: 'grid',
            gridTemplateColumns: "1fr",
            gridTemplateRows: "auto 1fr auto",
            gap: "40px",
        }}>
            <Grid item>
                <Header />
            </Grid>
            <Grid item>
                <Container maxWidth="xl" >
                    {children}
                </Container>
            </Grid>
            <Grid item>
                <Footer />
            </Grid>
        </Grid>
    );
};

export default LayoutPage;