import { productManager } from "../../services/index.js";

export const controllerProductById = async (req, res, next) => { 
    try {
        const { id } = req.body
        const product = await productManager.getProductById(id)
        res.status(200).json(product)
    } catch (error) {
        next(error)
    }
} 