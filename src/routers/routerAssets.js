import { Router } from "express";
import { 
    controllerCreateAssetList,
    controllerGetAssetById,
    controllerDeleteAsset 
} from "../controllers/controllerAssets.js";

const routerCreateAssetList = new Router();
const routerGetAssetById = new Router();
const routerDeleteAsset = new Router();

routerCreateAssetList.post("/", controllerCreateAssetList);
routerGetAssetById.get("/", controllerGetAssetById);
routerDeleteAsset.delete("/", controllerDeleteAsset);

export {
    routerCreateAssetList,
    routerGetAssetById,
    routerDeleteAsset
}