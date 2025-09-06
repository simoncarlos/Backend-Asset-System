import { productManager } from "../services/index.js";

export const controllerCreateAssetList = async (req, res, next) => {
    try {
        const assetList = await productManager.createAssetList(req.body)
        res.status(201).json(assetList)
    }catch (error) {
        next(error)
    }   
}

export const controllerGetAssetById = async (req, res, next) => {
    try {
        const assetList = await productManager.getAssetById(req.body.id)
        res.status(200).json(assetList)
    }catch (error) {
        next(error)
    }   
}

export const controllerDeleteAsset = async (req, res, next) => {
    try {
        const {qrCodeId, productId} = req.body
        const assetList = await productManager.deleteAsset(productId, qrCodeId)
        res.status(200).json(assetList)
    }catch (error) {
        next(error)
    }   
}