import dotenv from "dotenv";
dotenv.config({ path: '../config/.env' });

let productDao;

switch (process.env.TYPE_PERS) {
    case 'MONGODB':
        const { default: ProductDaoMongoDb } = await import('./productDaoMongoDb.js');
        productDao = new ProductDaoMongoDb();
        break;
    default: 
        throw new Error('No se ha definido un tipo de persistencia válido en la variable de entorno TYPE_PERS');
}

export { productDao };