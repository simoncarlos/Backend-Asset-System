import mongoose, { Schema, model } from "mongoose";
import { NotFoundError } from "../utils/errors.js";

class MongoDbContainer{

    constructor( nameCollection, schema){
        this.collection = mongoose.model( nameCollection, new Schema(schema), nameCollection)
    }

    async getAllProducts(){
        try {
            const data = await this.collection.find({})
            return data
        } catch (error) {
            console.log(error)
        }
    }
    async getProductById(idParam){
        try {
            const object = await this.collection.findById(new mongoose.Types.ObjectId(idParam));
            if (!object) {
                throw new NotFoundError(`Product with id ${idParam} not found`);
            }
            return object
        } catch (error) {
            console.log( `${error}` )
        }
    }
    async getByParam(param, value) {
        try {
            const data = await this.collection.find({ [param]: value });
            const status = data.length > 0 ? 200 : 404;
            return {
                status,
                data
            };
        } catch (error) {
            console.log(`Error al obtener objetos por ${param}: ${error}`);
        }
    }
    async saveObject(object){
        try{
            await this.collection.create({...object});
            return {
                status: 200
            }
        }catch(err){
            console.log(`Error al guardar el objecto: ${object}. Error: ${err}`)
        }
    }
    async updateObject( idParam, bodyRequest ){
        try{
            const response = await this.getObjectById( parseInt(idParam) )
            if( response.status === 200){
                await this.collection.updateOne( { id: idParam }, bodyRequest );
                return {
                    status: 200,
                    data: bodyRequest
                }
            }else{
                return {
                    status: 404,
                    message: `No se encontró el objeto con el id: ${idParam}`
                }
            }
        }catch(err){
            console.log(`Error al actualizar el objecto con el id: ${idParam}. Error: ${err}`);
        }
    }
    async deleteObject( idParam ) {
        try{
            const response = await this.getObjectById( idParam);
            if( response.status==200 ){
                await this.collection.deleteOne( { id: idParam } );
                return { status: 200 }
            }else{
                return { status: 404 }
            }
        }catch(err){
            console.log(`Error al eliminar el objecto con el id: ${idParam}. Error: ${err}`);
        }
    }

}

export default MongoDbContainer