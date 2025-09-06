import dotenv from "dotenv";
dotenv.config({ path: '../config/.env' });

let keyQrDao;

switch (process.env.TYPE_PERS) {
    case 'MONGODB':
        const { default: KeyQrDaoMongoDb } = await import('./keyQrDaoMongoDb.js');
        keyQrDao = new KeyQrDaoMongoDb();
        break;
    default: 
        throw new Error('No se ha definido un tipo de persistencia válido en la variable de entorno TYPE_PERS');
}

export { keyQrDao };