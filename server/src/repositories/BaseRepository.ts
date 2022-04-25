import * as mongoose from "mongoose";
import * as Mongoose from "mongoose";


export abstract class BaseRepository<T extends  Mongoose.Document> {

    protected _model: mongoose.Model<T>;


    protected constructor(model: mongoose.Model<T>) {
        this._model = model;
    }

    create(item: any): Promise<mongoose.Document<T>> {
        return this._model.create(item);
    }

    async getById(id: string): Promise<T> {
        return this._model.findById(id);
    }


    async all() : Promise<T[]>{
        return this._model.find({}).exec();
    }
}