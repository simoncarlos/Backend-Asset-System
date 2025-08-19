import { productManager } from "../../services/index.js";

export const controllerUpdateProduct = async (req, res, next) => {
    try{
        const { ...update } = req.body;
        const productUpdated = await productManager.updateObject(_id, update)
        res.status(200).json(productUpdated)
    }catch (error) {
        next(error)
    }
}