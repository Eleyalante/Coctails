import mongoose from "mongoose";
import { Ingredient } from "./Ingredient";

export class Cocktail extends mongoose.Document {
    id: string;
    name: string;
    recipe: string;
    ingredients: [
        {
            ingredient: Ingredient;
            amount: number;
        }
    ];
    categories:[];
    image: string;
}

const cocktailSchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    ingredients: [{
        ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredients' },
        amount: Number,
    }],
    categories: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Categories' },
    ],
    recipe: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
        default: null
    }
}, {
    versionKey: false,
});

const CocktailModel = mongoose.model<Cocktail>("Cocktails", cocktailSchema);

export default CocktailModel;