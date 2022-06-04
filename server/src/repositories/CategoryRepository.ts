import CategoryModel, {Category} from "../models/Category";
import { BaseRepository } from "./BaseRepository";
import * as mongodb from "mongodb";

export class CategoryRepository extends BaseRepository<Category>{

    constructor() {
        super(CategoryModel);
    }

    async update(item: Category): Promise<mongodb.UpdateResult>{
        let exists = await this._model.exists({name: item.name});
        if (exists != null) {
            throw new Error("Category with this name already exists");
        } else {
            return this._model.updateOne(
                {'_id':item.id},{
                    name:item.name,
                }
            );
        }
      
    }

    override async all() : Promise<Category[]>{
        return this._model.find({}).populate('cocktails').exec();
    }

    override async create(item: Category): Promise<Category> {
        let exists = await this._model.exists({name: item.name});
        if (exists != null) {
            throw new Error("Category with this name already exists");
        } else {
            return super.create(item);
        }
    }

    async getByName(nameValue: string): Promise<Category> {
        return this._model.findOne({name:nameValue});
    }
}