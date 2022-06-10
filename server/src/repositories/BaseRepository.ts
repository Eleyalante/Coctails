import * as mongoose from "mongoose";
import * as mongosedb from "mongodb";
import internal from "stream";

export abstract class BaseRepository<T extends  mongoose.Document> {

    protected _model: mongoose.Model<T>;


    protected constructor(model: mongoose.Model<T>) {
        this._model = model;
    }

    async create(item: any): Promise<T> {
        return this._model.create(item);
    }

    async getById(id: string): Promise<T> {
        return this._model.findById(id);
    }


    async list(pageNumber: number, pageLimit: number) : Promise<T[]>{
        return this._model.find({}).skip(pageNumber*pageLimit).limit(pageLimit).exec();
    }

    async delete(id: string): Promise<mongosedb.DeleteResult>{
        return this._model.findByIdAndDelete({
            _id:id
        });
    }

}