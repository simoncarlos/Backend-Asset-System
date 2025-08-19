import mongoose, { Schema, model } from "mongoose";
import { DatabaseError } from "../errors/errors.js";

class MongoDbContainer{

    constructor( nameCollection, schema){
        this.collection = mongoose.model( nameCollection, new Schema(schema), nameCollection)
    }

    async getAllProducts(){
        try {
            const object = await this.collection.find({})
            return object
        } catch (error) {
            throw new DatabaseError(error)
        }
    }
    async getProductById(idParam){
        try {
            const object = await this.collection.findById(new mongoose.Types.ObjectId(idParam))
            return object
        } catch (error) {
            throw new DatabaseError(error)
        }
    }
    async getProductsByQuery(query) {
        try {
            const object = await this.collection.find(query)
            return object
        } catch (error) {
            throw new DatabaseError(error)
        }
    }
    async saveObjects(data){
        try{
            console.log(data)
            const object = await this.collection.insertMany(data);
            return object
        }catch(error){
            throw new DatabaseError(error)
        }
    }
    async updateObject(idParam, update){
        try{
            const object = await this.getProductById(idParam)
            const objectUpdated = await this.collection.updateOne( { _id: idParam }, ...update )
            return objectUpdated
        }catch(error){
            throw new DatabaseError(error)
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