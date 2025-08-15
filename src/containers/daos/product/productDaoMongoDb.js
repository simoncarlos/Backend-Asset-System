import { model } from "mongoose";
import MongoDbContainer from "../../mongoContainer.js";
import dotenv from "dotenv";

dotenv.config({ path: '../config/.env' });

class ProductDaoMongoDb extends MongoDbContainer {
    constructor(){
        super( process.env.PRODUCTS_COLLECTION, {
            _id:{ type: Object, required: true },
            sequency: { type: Number, required: true },
            typeName: { type: String, required: true },
            descriptionBrand: { type: String, required: true },
            model: { type: String, required: true },
            serialNumber: { type: String, required: true },
            user: { type: String, required: true },
            status: { type: String, required: true },
            activeProduct: { type: Boolean, required: true },
            creationDate: { type: Date, required: true }, 
            accountingEntry: { type: String, required: true },
            invoiceNumber: { type: String, required: true },
            acCode: { type: String, required: true },
            usageLocation: { type: String, required: true },
            typeProduct: { type: String, required: true },
            assetCode: { type: String, required: true },
            assetLifeYears: { type: Number, required: true },
            purchasePriceARS: { type: Number, required: true },
            purchasePriceUSD: { type: Number, required: true },
            exchangeRate: { type: Number, required: true },
            notes: { type: String, required: true },
        })
    }
}

export default ProductDaoMongoDb;