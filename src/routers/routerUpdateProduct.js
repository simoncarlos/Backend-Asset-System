import { Router } from "express";
import { controllerUpdateProduct } from "../controllers/products/controllerUpdateProduct.js";

const routerUpdateProduct = new Router()

routerUpdateProduct.post("/", controllerUpdateProduct)

export default routerUpdateProduct;