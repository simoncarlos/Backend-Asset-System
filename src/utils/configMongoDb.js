import setting_process_env from "./settingEnviroment.js";
const { db } = setting_process_env;

const mongoDBConnectionString = `mongodb://${db.host}:${db.port}/${db.name}` || "mongodb://localhost:27017/EVG";

const configMongoDb = {
    connectionString: mongoDBConnectionString || "mongodb://localhost:27017/TEST",
    options: {
        serverSelectionTimeoutMS: 5000
    }
}

export default configMongoDb;