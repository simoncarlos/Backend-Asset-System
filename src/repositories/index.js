import { productDao } from "../containers/daos/product/index.js";
import { ProductList } from "./repositoryProducts.js";

export const productList = new ProductList(productDao)