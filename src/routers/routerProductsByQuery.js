import { Router } from "express";
import { controllerProductsByQuery } from "../controllers/products/controllerProductsByQuery.js";

const routerProductsByQuery = new Router()

routerProductsByQuery.get("/", controllerProductsByQuery)

export default routerProductsByQuery