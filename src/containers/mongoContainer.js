import mongoose, { Schema, model } from "mongoose";
import { DatabaseError } from "../errors/errors.js";

class MongoDbContainer{

    constructor( nameCollection, schema){
        this.collection = mongoose.model( nameCollection, new Schema(schema), nameCollection)
    }

    async getAllObjects(){
        try {
            const object = await this.collection.find({})
            return object
        } catch (error) {
            throw new DatabaseError(error)
        }
    }
    async getObjectById(idParam){
        try {
            const object = await this.collection.findById(new mongoose.Types.ObjectId(idParam))
            return object
        } catch (error) {
            throw new DatabaseError(error)
        }
    }
    async getObjectsByQuery(query) {
        try {
            const object = await this.collection.find(query)
            return object
        } catch (error) {
            throw new DatabaseError(error)
        }
    }
    async saveObject(data){
        try{
            const object = await this.collection.create(data);
            return object
        }catch(error){
            throw new DatabaseError(error)
        }
    }
    async saveObjectList(arrayObjects){
        try{
            const objects = await this.collection.insertMany(arrayObjects);
            return objects
        }catch(error){
            throw new DatabaseError(error)
        }
    }
    async updateObject(idParam, update){
        try{
            const objectUpdated = await this.collection.findByIdAndUpdate( { _id: idParam }, update, { new: true } )
            return objectUpdated
        }catch(error){
            throw new DatabaseError(error)
        }
    }
    async deleteObject( idParam ) {
        try{
            const objectDeleted = await this.collection.findByIdAndDelete( { _id: idParam } );
            return objectDeleted
        }catch(error){
            throw new DatabaseError(error)
        }
    }

}

export default MongoDbContainer