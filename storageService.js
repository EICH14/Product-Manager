const KEY = "products";

export function getProducts() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function saveProducts(products) {
  localStorage.setItem(KEY, JSON.stringify(products));
}
