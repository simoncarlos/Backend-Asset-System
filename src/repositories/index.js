import { productDao } from "../containers/daos/product/index.js";
import { ProductList } from "./repositoryProducts.js";
import { keyQrDao } from "../containers/daos/keyQrCode/index.js";
import { KeyQrList } from "./reporsitoryKeyQr.js";

export const productList = new ProductList(productDao)
export const keyQrList = new KeyQrList(keyQrDao)