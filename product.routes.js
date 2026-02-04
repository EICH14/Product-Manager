import { Router } from "express";
import { getProducts, createProduct } from "../controllers/product.controller.js";

const router = Router();

router.get("/", getProducts);
router.post("/", createProduct);

export default router;

import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} from "../controllers/product.controller.js";

router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
