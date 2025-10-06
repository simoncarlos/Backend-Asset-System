import { productDao } from "../containers/daos/product/index.js";
import { ProductList } from "./repositoryProducts.js";
import { keyQrDao } from "../containers/daos/keyQrCode/index.js";
import { KeyQrList } from "./reporsitoryKeyQr.js";
import { userDao } from "../containers/daos/users/index.js";
import { UserList } from "./repositoryUsers.js";

export const productList = new ProductList(productDao)
export const keyQrList = new KeyQrList(keyQrDao)
export const userList = new UserList(userDao)