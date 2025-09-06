import { Router } from "express";
import { 
    controllerGetQRCodeList, 
    controllerGetQRCodeByAssetCode,
    controllerUpdateQRCode
} from "../controllers/controllerQRCode.js";

const routerGetQRCodeList = new Router();
const routerGetQRCodeByAssetCode = new Router();
const routerUpdateQRCode = new Router();

routerGetQRCodeList.get("/", controllerGetQRCodeList);
routerGetQRCodeByAssetCode.get("/", controllerGetQRCodeByAssetCode);
routerUpdateQRCode.put("/", controllerUpdateQRCode);

export {
    routerGetQRCodeList,
    routerGetQRCodeByAssetCode,
    routerUpdateQRCode
}