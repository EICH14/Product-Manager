import { getAllProducts, saveAllProducts } from "../services/product.service.js";
import crypto from "crypto";

export function getProducts(req, res) {
  const products = getAllProducts();
  res.json(products);
}

export function createProduct(req, res) {
  const { name, category, price, stock } = req.body;

  if (!name || !category || price == null || stock == null) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const products = getAllProducts();

  const newProduct = {
    id: crypto.randomUUID(),
    name,
    category,
    price,
    stock,
    status: "active",
    createdAt: new Date().toISOString()
  };

  products.push(newProduct);
  saveAllProducts(products);

  res.status(201).json(newProduct);
}
