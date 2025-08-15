import { NotFoundError } from "../utils/errors.js";

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
        if(!product) throw new NotFoundError("")
        return product.dto()
    }
}