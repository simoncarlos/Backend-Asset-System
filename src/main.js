import app from './server.js';
import setting_process_env from './utils/settingEnviroment.js';
import { connectDB } from './utils/dbConnection.js';

await connectDB();

const PORT = setting_process_env.server.port;
const HOST = setting_process_env.server.host;
const server = app.listen( PORT, HOST, () => {
    logsStartServer(server.address());
});

server.on("error", error => console.log(`Error en servidor ${error}`));

const logsStartServer = (serverAddress) => {
    console.log(`Servidor escuchando en ${serverAddress.family}  ${HOST}:${PORT}`);
    console.log(`Modo de ejecución: ${process.env.NODE_ENV}`);
    console.log('Conexión a la base de datos exitosa');
}