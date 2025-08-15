import mongoose from 'mongoose';

export const connectDB = async (configMongoDb) => {
    try {
        await mongoose.connect(configMongoDb.connectionString, configMongoDb.options);
        console.log('Conexión a Mongo DataBase exitosa');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1);
    }
};