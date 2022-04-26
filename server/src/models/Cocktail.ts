import mongoose from "mongoose";

export class Cocktail extends mongoose.Document {
    id:string;
    name: string;
    recipe:string;
    ingredients: string[];
    image: string;
}

const cocktailSchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    ingredients: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Ingredients',
    }],
    recipe:{
      type:String,
      required:true,
    },
    image:{
        type:String,
        required:false,
        default:null
    }
}, {
    versionKey: false,
});

const CocktailModel = mongoose.model<Cocktail>("Cocktails", cocktailSchema);

export default CocktailModel;