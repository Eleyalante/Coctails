import mongoose from "mongoose";
import { Cocktail } from "./Cocktail";

export class Category extends mongoose.Document {
    id: string;
    name: string;
    cocktails: Cocktail;
}

const categorySchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    cocktails: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'Coctails'
        }
    ]
}, {
    versionKey: false,
});

const CategoryModel = mongoose.model<Category>("Categories", categorySchema);

export default CategoryModel;