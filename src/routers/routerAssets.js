import { Router } from "express";
import { 
    controllerCreateAssetList,
    controllerGetAssetById,
    controllerDeleteAsset 
} from "../controllers/controllerAssets.js";
import { sessionMiddleware } from "../middlewares/sessionMiddleware.js";

const routerCreateAssetList = new Router();
const routerGetAssetById = new Router();
const routerDeleteAsset = new Router();

routerCreateAssetList.post("/", sessionMiddleware, controllerCreateAssetList);
routerGetAssetById.get("/", sessionMiddleware, controllerGetAssetById);
routerDeleteAsset.delete("/", sessionMiddleware, controllerDeleteAsset);

export {
    routerCreateAssetList,
    routerGetAssetById,
    routerDeleteAsset
}