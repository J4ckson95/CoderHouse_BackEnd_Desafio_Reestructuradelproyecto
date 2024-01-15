import { Router } from "express";
import { createCart, getCartById } from "../controller/carts.controller.js";

const router = Router()

router.post("/", createCart)
router.get("/:cid", getCartById)

export default router