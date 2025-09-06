import { Product } from "../models/product.js";
import { NotFoundError } from "../errors/errors.js";

export class ProductList {
    #productDao

    constructor(productDao) {
        this.#productDao = productDao
    }

    async getProducts() {
        const productsDto = await this.#productDao.getAllObjects()
        if (!productsDto) throw new NotFoundError()
        return productsDto.map(product => new Product(product))
    }
    async getProductById(id) {
        const productDto = await this.#productDao.getObjectById(id)
        if (!productDto) throw new NotFoundError()
        return new Product(productDto)
    }
    async getProductsByQuery(query) {
        const productsDto = await this.#productDao.getObjectsByQuery(query)
        if (!productsDto || productsDto.length === 0) throw new NotFoundError()
        return productsDto.map(product => new Product(product)) 
    }
    async saveObject(object) {
        const productDto = await this.#productDao.saveObject(object)
        return new Product(productDto)
    }
    async saveObjectList(objectList) {
        const productsDto = await this.#productDao.saveObjectList(objectList)
        return productsDto.map(product => new Product(product)) 
    }
    async updateObject(id, objectUpdated) {
        const productDto = await this.#productDao.updateObject(id, objectUpdated)
        if (!productDto) throw new NotFoundError()
        return new Product(productDto)
    }
    async deleteObject(id) {
        const productDto = await this.#productDao.deleteObject(id)
        if (!productDto) throw new NotFoundError()
        return new Product(productDto)
    } 

}