import dotenv from "dotenv";

dotenv.config({ path: '../config/.env' });

const configMongoDb = {
        connectionString: process.env.MONGODB_CONNECTION_STRING || "mongodb://localhost:27017/TEST",
        options: {
            serverSelectionTimeoutMS: 5000
        }
}

export default configMongoDb;