const setting_process_env = {
    server: {
        host: process.env.SERVER_HOST || '127.0.0.1',
        port: process.env.SERVER_PORT || 8595,
    },
    db:{
        name: process.env.DB_NAME || 'DEV',
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 27017,
        enviroment: process.env.NODE_ENV || 'DEVELOPMENT',
        collection: {
            users: process.env.DB_COLLECTION_USERS || 'Users',
            products: process.env.DB_COLLECTION_PRODUCTS || 'Products',
            keyQrs: process.env.DB_COLLECTION_KEYS || 'Keys',
        }
    },
    jwt:{
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN || '1h',
    },
    cors_origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    type_pers: process.env.TYPE_PERS || 'MONGODB'
}

export default setting_process_env;