import { Router } from "express";

import { 
    registerMiddleware 
} from "../middlewares/registerMiddleware.js";

import { 
    controllerCreateUser,
    controllerLoginUser,
    controllerLogoutUser
} from "../controllers/controllerUsers.js";


const routerCreateUser = new Router();
const routerLoginUser = new Router();
const routerLogoutUser = new Router();

routerCreateUser.post("/", registerMiddleware ,controllerCreateUser)
routerLoginUser.post("/", controllerLoginUser)
routerLogoutUser.post("/", controllerLogoutUser)

export {
    routerCreateUser,
    routerLoginUser,
    routerLogoutUser
}