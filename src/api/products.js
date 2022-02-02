import { configureHttpRequest } from "./httpClient";

export function getProductCategories() {
  return configureHttpRequest("GET", "/categories");
}

export function getProducts() {
  return configureHttpRequest("GET", "/products");
}

export function getProductById(productId) {
  return configureHttpRequest("GET", `/products/${productId}`);
}

export function postOrder(payload) {
  return configureHttpRequest("POST", "/order", payload);
}
