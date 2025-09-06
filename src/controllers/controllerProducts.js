import { productManager } from "../services/index.js"

export const controllerGetAllProducts = async (req, res, next) => {
    try{
        const productList = await productManager.getProducts()
        res.status(200).json(productList)
    }catch(error){
        next(error)
    }
}

export const controllerGetProductsByQuery = async (req, res, next) => {
    try{
        const query = req.body
        const productList = await productManager.getProductsByQuery(query)
        res.status(200).json(productList)
    }catch(error){
        next(error)
    }   
}

export const controllerUpdateProduct = async (req, res, next) => {
    try {
        const { _id:id, ...objectUpdated} = req.body
        const product = await productManager.updateProduct(id, objectUpdated)
        res.status(200).json(product)
    } catch (error) {
        next(error)
    }       
}