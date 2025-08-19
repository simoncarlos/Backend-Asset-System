import { formatProduct, formatProducts } from "../utils/formatProducts.js"
export class Products {
    #productList
    constructor(productList){
        this.#productList = productList
    }
    async getProducts() {
        const products = await this.#productList.getProducts()
        return products.map(product => product.dto())
    }
    async getProductById(id) { 
        const product = await this.#productList.getProductById(id)
        return product.dto()
    }
    async getProductsByQuery(query) {
        const products = await this.#productList.getProductsByQuery(query)
        return products.map(product => product.dto())
    }
    async saveObjects(objects) {
        const formatObjects = formatProducts(objects)
        const products = await this.#productList.saveObjects(formatObjects)
        return products.map(product => product.dto())
    }
    async updateObject(id, objectUpdated) {
        const formatObject = formatProduct(objectUpdated)
        const product = await this.#productList.updateObject(id, formatObject)
        return product.dto()
    }
}