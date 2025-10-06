import mongoose from 'mongoose';
import { DatabaseError } from '../errors/errors.js';
import configMongoDb from './configMongoDb.js';

export const connectDB = async () => {
    try {
        await mongoose.connect(configMongoDb.connectionString, configMongoDb.options);
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        throw new DatabaseError(error)
        process.exit(1);
    }
};