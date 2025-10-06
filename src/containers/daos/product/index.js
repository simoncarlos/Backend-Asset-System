import setting_process_env from '../../../utils/settingEnviroment.js';
let productDao;

switch (setting_process_env.type_pers) {
    case 'MONGODB':
        const { default: ProductDaoMongoDb } = await import('./productDaoMongoDb.js');
        productDao = new ProductDaoMongoDb();
        break;
    default: 
    throw new Error('No se ha definido un tipo de persistencia válido en la variable de entorno TYPE_PERS');
}

export { productDao };