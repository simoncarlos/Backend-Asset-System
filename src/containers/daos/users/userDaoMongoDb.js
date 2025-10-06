import setting_process_env from "../../../utils/settingEnviroment.js";
import MongoDbContainer from "../../mongoContainer.js";

const collection = setting_process_env.db.collection.users;

class UserDaoMongoDb extends MongoDbContainer {
    constructor(){
        super( collection, {
            username: { type: String, required: true },
            password: { type: String, required: true },
            role: { type: String, required: true }
        })
    }
}

export default UserDaoMongoDb;