import { productManager } from "../../services/index.js";

export const controllerCreateProduct = async (req, res, next) => {
    try {
        let array = req.body
        const product = await productManager.saveObjects(array)
        res.status(201).json(product)
    } catch (error) {
        next(error)
    }
}