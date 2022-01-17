import React from 'react';
import {Container, AppBar, Toolbar, Typography, IconButton, Box, Badge} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeSwitcher from "../UI/ThemeSwitcher/ThemeSwitcher";
import Link from '../UI/Link/Link'
import HeaderNavigation from "../Navigation/HeaderNavigation";
import {useLocation} from "react-router";
import FindByName from "../Catalog/CatalogFilters/FindByName";

const pages = ['About', 'Catalog'];

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));


const Header = () => {
    const location = useLocation()

    const handleOpenNavMenu = (event) => {
    };
    const handleOpenUserMenu = (event) => {
    };

    const handleCloseNavMenu = () => {
    };

    const handleCloseUserMenu = () => {
    };

    return (
        <AppBar position="static" color="transparent">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <Link>COOL STORE</Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    <Box sx={{ flexGrow:1, display: { xs: 'none', md: 'flex' } }}>
                        <Box sx={{display: "block", maxWidth: "20%", width: "100%" }}>
                            <HeaderNavigation/>
                        </Box>
                    </Box>

                    {
                        location.pathname === '/catalog' && <Box mr={10}><FindByName/></Box>
                    }

                    <Box sx={{ flexGrow: 0, display: "flex" }}>
                        <ThemeSwitcher sx={{ m: 1 }} defaultChecked />
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={4} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;