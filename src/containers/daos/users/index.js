import setting_process_env from '../../../utils/settingEnviroment.js';
let userDao;

switch (setting_process_env.type_pers) {
    case 'MONGODB':
        const { default: UserDaoMongoDb } = await import('./userDaoMongoDb.js');
        userDao = new UserDaoMongoDb();
        break;
    default: 
        throw new Error('No se ha definido un tipo de persistencia válido en la variable de entorno TYPE_PERS');
}

export { userDao };