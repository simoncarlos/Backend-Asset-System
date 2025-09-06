import { formatProduct, formatProductList } from "../utils/formatProducts.js"
export class AssetManager {
    #productList
    #keyQrList
    constructor(productList, keyQrList){
        this.#productList = productList
        this.#keyQrList = keyQrList
    }
    async getProducts() {
        const products = await this.#productList.getProducts()
        return products.map(product => product.dto())
    }
    async getProductsByQuery(query) {
        const products = await this.#productList.getProductsByQuery(query)
        return products.map(product => product.dto())
    }
    async getQrList() {
        const qrList = await this.#keyQrList.getKeyQrs()
        return qrList.map(qr => qr.dto())
    }
    async getQrCodeByAssetCode(query) {
        const qrCode = await this.#keyQrList.getKeyQrByQuery(query)
        return qrCode.dto()
    }
    async createAssetList(objectList) {
        const formatObjectList = formatProductList(objectList)
        const productList = await this.#productList.saveObjectList(formatObjectList)
        const qrList = await this.#keyQrList.createKeyQrList(productList.map(product => {
            return { 
                assetId: product.dto()._id.toHexString(), 
                assetCode: product.dto().assetCode 
            }
        })) 
        const assetList =  productList.map(product => { 
                const qrID = qrList.find(qr => qr.dto().assetId == product.dto()._id).dto()._id
                return {
                    ...product.dto(), 
                    qrID
                }
            }
        )
        return assetList
    }
    async getAssetById(id) { 
        const product = await this.#productList.getProductById(id)
        const qrAsset = await this.#keyQrList.getKeyQrByQuery({ assetId: product.dto()._id })
        return {
            ...product.dto(),
            qrID: qrAsset.dto()._id
        }
    }
    async updateProduct(id, objectUpdated) {
        const product = await this.#productList.updateObject(id, objectUpdated)
        const qrAsset = await this.#keyQrList.getKeyQrByQuery({ assetId: product.dto()._id })
        return {
            ...product.dto(),
            qrID: qrAsset.dto()._id
        }
    }
    async updateQr(id, objectUpdated){
        const qrAsset = await this.#keyQrList.updateKeyQr(id, objectUpdated)
        return qrAsset.dto()
    }
    async deleteAsset(idProduct, idQrAsset){
        const product = await this.#productList.deleteObject(idProduct)
        const qrAsset = await this.#keyQrList.deleteKeyQr(idQrAsset)
        return {
            ...product.dto(),
            qrID: qrAsset.dto()._id
        }
    }
}