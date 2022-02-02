export const routesId = {
  home: "home",
  about: "about",
  catalog: "catalog",
  product: "product",
  cart: "cart",
  delivery: "delivery",
  contacts: "contacts",
  404: "404",
};

export const routesConfig = [
  { id: routesId.home, path: "/", pageTitle: "Home" },
  { id: routesId.about, path: "/about", pageTitle: "About" },
  { id: routesId.catalog, path: "/catalog", pageTitle: "Catalog" },
  { id: routesId.product, path: "/catalog/:cardId", pageTitle: "Product" },
  { id: routesId.cart, path: "/cart", pageTitle: "Cart" },
  { id: routesId.delivery, path: "/delivery", pageTitle: "Delivery" },
  { id: routesId.contacts, path: "/contacts", pageTitle: "Contacts" },
  { id: routesId["404"], path: "*", pageTitle: "Page not found" },
];
