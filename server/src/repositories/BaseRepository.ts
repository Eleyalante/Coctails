import * as mongoose from "mongoose";


export abstract class BaseRepository<T extends  mongoose.Document> {

    protected _model: mongoose.Model<T>;


    protected constructor(model: mongoose.Model<T>) {
        this._model = model;
    }

    create(item: any): Promise<T> {
        return this._model.create(item);
    }

    async getById(id: string): Promise<T> {
        return this._model.findById(id);
    }


    async all() : Promise<T[]>{
        return this._model.find({}).exec();
    }

    async delete(id: string): Promise<any>{
        return this._model.findByIdAndDelete({
            _id:id
        });
    }

}