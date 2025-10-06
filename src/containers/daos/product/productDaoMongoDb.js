import setting_process_env from "../../../utils/settingEnviroment.js";
import MongoDbContainer from "../../mongoContainer.js";

const collection = setting_process_env.db.collection.products;
class ProductDaoMongoDb extends MongoDbContainer {
    constructor(){
        super( collection, {
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
            notes: { type: String },
            checkDate: { type: Date, required: true }
        })
    }
}

export default ProductDaoMongoDb;