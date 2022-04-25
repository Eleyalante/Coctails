import {BaseRepository} from "./BaseRepository";
import IngredientModel, {Ingredient} from "../models/Ingredient";


export class IngredientRepository extends BaseRepository<Ingredient> {

    constructor() {
        super(IngredientModel);
    }

    async getByName(nameValue: string): Promise<Ingredient> {
        return this._model.findOne({name:nameValue});
    }

    async getByUnit(unitValue: string): Promise<Ingredient[]> {
        return this._model.find({unit:unitValue}).exec();
    }

    override async create(item: Ingredient): Promise<Ingredient> {
        let exists = await this._model.exists({name: item.name});
        if (exists != null) {
            throw new Error("Ingredient with this name already exists");
        } else {
            return this._model.create(item);
        }
    }

}