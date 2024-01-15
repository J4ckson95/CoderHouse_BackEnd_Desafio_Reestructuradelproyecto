import { Router } from "express";
import { getProducts, getProdutcsById } from "../controller/products.controller.js";

const router = Router()

router.get("/", getProducts)
router.get("/:pid", getProdutcsById)

export default router