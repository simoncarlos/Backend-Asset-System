import setting_process_env from "../../../utils/settingEnviroment.js";
import MongoDbContainer from "../../mongoContainer.js";

const collection = setting_process_env.db.collection.keyQrs;
class KeyQrDaoMongoDb extends MongoDbContainer {
    constructor(){
        super( collection, {
            assetId: { type: String, required: true },
            assetCode: { type: String, required: true }
        })
    }
}

export default KeyQrDaoMongoDb;