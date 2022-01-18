import React from 'react';
import { Container, Box } from '@mui/material'

const ContainerLayout = ({children, attrs}) => {
    return (
        <Box {...attrs} paddingY={20}>
            <Container maxWidth="xl">
                {children}
            </Container>
        </Box>
    );
};

export default ContainerLayout;