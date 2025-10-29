import app from './server.js';
import setting_process_env from './utils/settingEnviroment.js';
import { connectDB } from './utils/dbConnection.js';
import logger from './logs/index.js';

await connectDB();

const PORT = setting_process_env.server.port;
const HOST = setting_process_env.server.host;
const server = app.listen( PORT, HOST, () => {
    logsStartServer(server.address());
});

server.on("error", error => logger.info(`Error en servidor ${error}`));

const logsStartServer = (serverAddress) => {
    logger.info(`Servidor escuchando en ${serverAddress.family}  ${HOST}:${PORT}`);
    logger.info(`Modo de ejecución: ${process.env.NODE_ENV}`);
    logger.info('Conexión a la base de datos exitosa');
}