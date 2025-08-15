import { Router } from "express";
import { controllerAllProducts } from "../controllers/products/controllerAllProducts.js";

const routerAllProducts = new Router();

routerAllProducts.get("/", controllerAllProducts);

export default routerAllProducts;