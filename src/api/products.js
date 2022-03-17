import { get, post } from "./httpClient";

export function getProductCategories() {
  return get("/categories");
}

export function getProducts() {
  return get("/products");
}

export function getProductById(productId) {
  return get(`/products/${productId}`);
}

export function postOrder(payload) {
  return post("/order", payload);
}
