import { productList, keyQrList, userList} from "../repositories/index.js";
import { AssetManager } from "./assetServices.js";
import { UserManager } from "./userServices.js";

export const productManager = new AssetManager( productList, keyQrList )
export const userManager = new UserManager( userList )