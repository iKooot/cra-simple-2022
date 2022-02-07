import React from 'react';
import { routesConfig, routesId } from "./routesConfig";

const Home = React.lazy(() => import('../pages/Home/index'))
const About = React.lazy(() => import('../pages/About/index'))
const Catalog = React.lazy(() => import('../pages/Catalog/index'))
const Contacts = React.lazy(() => import('../pages/Contacts/index'))
const NotFound = React.lazy(() => import('../pages/NotFound/index'))
const ProductPage = React.lazy(() => import('../pages/Product/index'))
const Delivery = React.lazy(() => import('../pages/Delivery/index'))
const OrderPage = React.lazy(() => import('../pages/Order/index'))
const CartPage = React.lazy(() => import('../pages/Cart/index'))

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
