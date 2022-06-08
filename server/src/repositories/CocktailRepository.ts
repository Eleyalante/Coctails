
import CocktailModel, { Cocktail } from "../models/Cocktail";
import { BaseRepository } from "./BaseRepository";
import * as mongodb from "mongodb";


export class CocktailRepository extends BaseRepository<Cocktail> {

    constructor() {
        super(CocktailModel);
    }


    async getByIngredient(id: string): Promise<Cocktail[]> {
        let result = this._model.find({ingredients: {$elemMatch:{"ingredient":id}}}).populate('ingredients.ingredient').populate('categories');
        return result;
    }
    
    async getByCategory(id: string) : Promise<Cocktail[]>{
        let result = this._model.find({categories:{$in:[id]}}).populate('ingredients.ingredient').populate('categories');
        return result;

    }

    async getByName(nameValue: string): Promise<Cocktail> {
        return this._model.findOne({ name: nameValue });
    }


    override async getById(id: string): Promise<Cocktail> {
        return this._model.findById(id).populate('ingredients.ingredient').populate('categories');
    }


    async update(item: Cocktail): Promise<mongodb.UpdateResult> {
        let exists = await this._model.exists({ name: item.name, '_id': { $ne: item.id } });
        if (exists != null) {
            throw new Error("Cocktail with this name already exists");
        } else {
            return this._model.updateOne(
                { '_id': item.id }, {
                name: item.name,
                image: item.image,
                recipe: item.recipe,
                ingredients: item.ingredients,
                categories: item.categories
            }
            );
        }

    }

    async removeCategoryFromCocktail(id: string) : Promise<mongodb.UpdateResult>{
        return this._model.updateMany( { categories: {$in:id}}, {
            $pull: {
                categories: id
            }
        });
    }

    override async all(): Promise<Cocktail[]> {
        return this._model.find({}).populate('ingredients.ingredient').populate('categories');
    }

    override async create(item: Cocktail): Promise<Cocktail> {
        let exists = await this._model.exists({ name: item.name });
        if (exists != null) {
            throw new Error("Cocktail with this name already exists");
        } else {
            return super.create(item);
        }
    }

}