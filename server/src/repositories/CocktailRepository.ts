
import CocktailModel, {Cocktail} from "../models/Cocktail";
import {BaseRepository} from "./BaseRepository";
import * as mongodb from "mongodb";


export class CocktailRepository extends BaseRepository<Cocktail> {

    constructor() {
        super(CocktailModel);
    }

    async getByName(nameValue: string): Promise<Cocktail> {
        return this._model.findOne({name:nameValue});
    }


    override async getById(id: string): Promise<Cocktail> {
        return this._model.findById(id).populate('ingredients');
    }


    async update(item: Cocktail): Promise<mongodb.UpdateResult>{
        return this._model.findOneAndUpdate(
            {id:item.id},{
                name:item.name,
                image:item.image,
                recipe:item.recipe,
                ingredients:item.ingredients
            }
        );
    }

    override async all() : Promise<Cocktail[]>{
        return this._model.find({}).populate('ingredients').exec();
    }

    override async create(item: Cocktail): Promise<Cocktail> {
        let exists = await this._model.exists({name: item.name});
        if (exists != null) {
            throw new Error("Cocktail with this name already exists");
        } else {
            return super.create(item);
        }
    }

}