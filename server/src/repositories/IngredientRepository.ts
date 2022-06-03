import {BaseRepository} from "./BaseRepository";
import IngredientModel, {Ingredient} from "../models/Ingredient";
import * as mongodb from "mongodb";


export class IngredientRepository extends BaseRepository<Ingredient> {

    constructor() {
        super(IngredientModel);
    }

    async getByName(nameValue: string): Promise<Ingredient> {
        return this._model.findOne({name:nameValue});
    }

    async getByUnit(unitValue: String): Promise<Ingredient[]> {
        return this._model.find({unit:unitValue}).exec();
    }

    override async create(item: Ingredient): Promise<Ingredient> {
        let exists = await this._model.exists({name: item.name});
        if (exists != null) {
            throw new Error("Ingredient with this name already exists");
        } else {
            return super.create(item);
        }
    }

    async update(item: Ingredient): Promise<mongodb.UpdateResult>{
        return this._model.findOneAndUpdate(
            {id:item.id},{
                name:item.name,
                image:item.image,
                unit:item.unit
            }
        );
    }

    async exists(itemIds: number[])  : Promise<Boolean>{

        var result = await this._model.find({id:{$in:itemIds}});
        if(result.length == 0){
            return false;
        }
        return true;
    }
}