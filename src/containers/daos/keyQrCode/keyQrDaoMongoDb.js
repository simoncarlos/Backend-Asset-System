import MongoDbContainer from "../../mongoContainer.js";
import dotenv from "dotenv";

dotenv.config({ path: '../config/.env' });

class KeyQrDaoMongoDb extends MongoDbContainer {
    constructor(){
        super( process.env.KEYS_COLLECTION, {
            assetId: { type: String, required: true },
            assetCode: { type: String, required: true }
        })
    }
}

export default KeyQrDaoMongoDb;