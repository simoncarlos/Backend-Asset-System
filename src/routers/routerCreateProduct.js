import { Router } from "express";
import { controllerCreateProduct } from "../controllers/products/controllerCreateProduct.js";

const routerCreateProduct = new Router()

routerCreateProduct.post("/", controllerCreateProduct)

export default routerCreateProduct