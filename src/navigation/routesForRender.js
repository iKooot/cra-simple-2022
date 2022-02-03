import { routesConfig, routesId } from "./routesConfig";

import Home from "../pages/Home";
import About from "../pages/About";
import Catalog from "../pages/Catalog";
import Contacts from "../pages/Contacts";
import NotFound from "../pages/NotFound";
import ProductPage from "../pages/Product";
import Delivery from "../pages/Delivery";
import OrderPage from "../pages/Order";
import CartPage from "../pages/Cart";

const renderMap = {
  [routesId.home]: Home,
  [routesId.about]: About,
  [routesId.catalog]: Catalog,
  [routesId.product]: ProductPage,
  [routesId.delivery]: Delivery,
  [routesId.cart]: CartPage,
  [routesId.order]: OrderPage,
  [routesId.contacts]: Contacts,
  [routesId["404"]]: NotFound,
};

export const routesForRender = routesConfig.map((route) => ({
  ...route,
  element: renderMap[route.id],
}));
