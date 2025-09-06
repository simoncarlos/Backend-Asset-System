import { Router } from "express";
import { 
    controllerGetAllProducts,
    controllerGetProductsByQuery,
    controllerUpdateProduct
} from "../controllers/controllerProducts.js";

const routerGetAllProducts = new Router();
const routerGetProductsByQuery = new Router();
const routercontrollerUpdateProduct = new Router();

routerGetAllProducts.get("/", controllerGetAllProducts);
routerGetProductsByQuery.get("/", controllerGetProductsByQuery);
routercontrollerUpdateProduct.put("/", controllerUpdateProduct);

export { 
    routerGetAllProducts,
    routerGetProductsByQuery,
    routercontrollerUpdateProduct
}