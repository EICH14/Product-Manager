import fs from "fs";

const FILE = "src/data/products.json";

export function getAllProducts() {
  return JSON.parse(fs.readFileSync(FILE));
}

export function saveAllProducts(products) {
  fs.writeFileSync(FILE, JSON.stringify(products, null, 2));
}
