import { Router } from "express";
import { 
    controllerGetAllProducts,
    controllerGetProductsByQuery,
    controllerUpdateProduct
} from "../controllers/controllerProducts.js";
import { 
    sessionMiddleware 
} from "../middlewares/sessionMiddleware.js";

const routerGetAllProducts = new Router();
const routerGetProductsByQuery = new Router();
const routercontrollerUpdateProduct = new Router();

routerGetAllProducts.get("/", sessionMiddleware,controllerGetAllProducts);
routerGetProductsByQuery.get("/", sessionMiddleware, controllerGetProductsByQuery);
routercontrollerUpdateProduct.put("/", sessionMiddleware, controllerUpdateProduct);

export { 
    routerGetAllProducts,
    routerGetProductsByQuery,
    routercontrollerUpdateProduct
}