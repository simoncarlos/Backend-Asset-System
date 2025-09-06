import { productList, keyQrList} from "../repositories/index.js";
import { AssetManager } from "./assetServices.js";

export const productManager = new AssetManager( productList, keyQrList );