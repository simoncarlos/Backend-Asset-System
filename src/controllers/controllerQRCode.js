import { productManager } from "../services/index.js";

export const controllerGetQRCodeList = async (req, res, next) => {
    try {
        const qrList = await productManager.getQrList()
        res.status(200).json(qrList)
    }catch (error) {
        next(error)
    }   
}

export const controllerGetQRCodeByAssetCode = async (req, res, next) => {
    try {
        const query = req.body
        const qrCodeByQuery = await productManager.getQrCodeByAssetCode(query)
        res.status(200).json(qrCodeByQuery)
    }catch (error) {
        next(error)
    }   
}

export const controllerUpdateQRCode = async (req, res, next) => {
    try {
        const { _id:id, ...objectUpdated} = req.body
        const qrCode = await productManager.updateQr(id, objectUpdated)
        res.status(200).json(qrCode)
    }catch (error) {
        next(error)
    }   
}