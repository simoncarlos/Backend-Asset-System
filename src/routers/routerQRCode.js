import { Router } from "express";
import { 
    controllerGetQRCodeList, 
    controllerGetQRCodeByAssetCode,
    controllerUpdateQRCode
} from "../controllers/controllerQRCode.js";
import { sessionMiddleware } from "../middlewares/sessionMiddleware.js";

const routerGetQRCodeList = new Router();
const routerGetQRCodeByAssetCode = new Router();
const routerUpdateQRCode = new Router();

routerGetQRCodeList.get("/", sessionMiddleware, controllerGetQRCodeList);
routerGetQRCodeByAssetCode.get("/", sessionMiddleware, controllerGetQRCodeByAssetCode);
routerUpdateQRCode.put("/", sessionMiddleware, controllerUpdateQRCode);

export {
    routerGetQRCodeList,
    routerGetQRCodeByAssetCode,
    routerUpdateQRCode
}