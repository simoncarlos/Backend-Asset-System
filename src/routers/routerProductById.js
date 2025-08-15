import { Router } from "express";
import { controllerProductById } from "../controllers/products/controllerProductById.js";

const routerProductById = new Router();

routerProductById.get("/", controllerProductById);

export default routerProductById;