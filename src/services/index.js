import { productList} from "../repositories/index.js";
import { Products } from "./productServices.js";

export const productManager = new Products( productList )