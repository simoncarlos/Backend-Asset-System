import dotenv from "dotenv";
import app from './server.js';
import configMongoDb from "./utils/config.js";
import { connectDB } from './utils/dbConnection.js';
import { productDao } from "./containers/daos/product/index.js";

dotenv.config({ path: '../config/.env' });

await connectDB(configMongoDb);

const PORT = process.env.PORT || 8080;

const server = app.listen( PORT, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${server.address().port}`);
});

server.on("error", error => console.log(`Error en servidor ${error}`));