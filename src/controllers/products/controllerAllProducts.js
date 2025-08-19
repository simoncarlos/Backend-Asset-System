import { productManager } from "../../services/index.js";  

export const controllerAllProducts = async (req, res, next) => {
    
    try{
        const productList = await productManager.getProducts()
        res.status(200).json(productList)
    }catch(error){
        next(error)
    }

}