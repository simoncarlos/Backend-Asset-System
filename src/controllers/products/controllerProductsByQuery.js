import { productManager } from "../../services/index.js";

export const controllerProductsByQuery = async (req, res, next) => {
    try{
        const query = req.body
        const products = await productManager.getProductsByQuery(query)
        res.status(200).json(products)
    }catch(error){
        next(error)
    }
}