import { productManager } from "../../services/index.js";

export const controllerProductById = async (req, res) => { 
    try {
        const { id } = req.body;
        const product = await productManager.getProductById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }        
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ "messaje": error.message });
    }
} 