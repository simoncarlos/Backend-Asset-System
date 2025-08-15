import { productManager } from "../../services/index.js";  

export const controllerAllProducts = async (req, res) => {
    
    const productList = await productManager.getProducts()

    res.json(productList).status(200)
}