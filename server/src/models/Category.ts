import mongoose from "mongoose";
import { Cocktail } from "./Cocktail";

export class Category extends mongoose.Document {
    id: string;
    name: string;
}

const categorySchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }
}, {
    versionKey: false,
});

const CategoryModel = mongoose.model<Category>("Categories", categorySchema);

export default CategoryModel;