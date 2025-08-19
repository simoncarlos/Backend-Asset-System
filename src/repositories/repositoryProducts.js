import { Product } from "../models/product.js";
import { NotFoundError } from "../errors/errors.js";

export class ProductList {
    #productDao

    constructor(productDao) {
        this.#productDao = productDao
    }

    async getProducts() {
        const productsDto = await this.#productDao.getAllProducts()
        if (!productsDto) throw new NotFoundError()
        return productsDto.map(product => new Product(product))
    }
    async getProductById(id) {
        const productDto = await this.#productDao.getProductById(id)
        if (!productDto) throw new NotFoundError()
        return new Product(productDto)
    }
    async getProductsByQuery(query) {
        const productsDto = await this.#productDao.getProductsByQuery(query)
        if (!productsDto || productsDto.length === 0) throw new NotFoundError()
        return productsDto.map(product => new Product(product)) 
    }
    async saveObjects(objects) {
        const productsDto = await this.#productDao.saveObjects(objects)
        return productsDto.map(product => new Product(product)) 
    }
    async updateObject(id, objectUpdated) {
        const productDto = await this.#productDao.updateObject(id, objectUpdated)
        if (!productDto) throw new NotFoundError()
        return new Product(productDto)
    }

}