import { Product } from "../models/product.js";
import { NotFoundError } from '../utils/errors.js';

export class ProductList {
    #productDao

    constructor(productDao) {
        this.#productDao = productDao
    }

    async getProducts() {
        const productsDto = await this.#productDao.getAllProducts()
        return productsDto.map(product => new Product(product))
    }
    async getProductById(id) {
        const productDto = await this.#productDao.getProductById(id)
        if (!productDto) throw new NotFoundError("Si muestra mensaje 404")
        return new Product(productDto)
    }

}