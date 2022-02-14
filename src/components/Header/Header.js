import React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Badge,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import { CartIcon, ThemeSwitcher } from "../UI";
import { HeaderNavigation } from "../Navigation";
import { useLocation } from "react-router";
import { CatalogFindByName } from "../Catalog";
import { routesConfig } from "../../navigation/routesConfig";

export const Header = () => {
  const location = useLocation();

  const handleOpenNavMenu = (event) => {};

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link
              color="text.primary"
              underline="none"
              to={routesConfig.find((el) => el.id === "home").path}
              component={RouterLink}
            >
              COOL STORE
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Box sx={{ display: "block", maxWidth: "25%", width: "100%" }}>
              <HeaderNavigation />
            </Box>
          </Box>

          {location.pathname === "/catalog" && (
            <Box mr={10}>
              <CatalogFindByName />
            </Box>
          )}

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <ThemeSwitcher sx={{ m: 1 }} defaultChecked />
            <CartIcon />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
