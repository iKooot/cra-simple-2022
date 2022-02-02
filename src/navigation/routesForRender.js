import {routesConfig, routesId} from './routesConfig'

import Home from '../pages/Home'
import About from '../pages/About'
import Catalog from '../pages/Catalog'
import Contacts from '../pages/Contacts'
import NotFound from '../pages/Contacts'
import ProductPage from '../pages/Product'
import Delivery from '../pages/Delivery'

const renderMap = {
    [routesId.home]: Home,
    [routesId.about]: About,
    [routesId.catalog]: Catalog,
    [routesId.product]: ProductPage,
    [routesId.delivery]: Delivery,
    [routesId.cart]: Home,
    [routesId.contacts]: Contacts,
    [routesId['404']]: NotFound,
}

export const routesForRender = routesConfig.map(route => ({
    ...route,
    element: renderMap[route.id]
}))