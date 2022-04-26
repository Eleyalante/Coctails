import mongoose from "mongoose";

export class Ingredient extends mongoose.Document {
    id: string;
    name: string;
    unit: string;
    image: string;
}

const ingredientSchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    unit: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false,
        default: null
    }
}, {
    versionKey: false,
});

const IngredientModel = mongoose.model<Ingredient>("Ingredients", ingredientSchema);

export default IngredientModel;