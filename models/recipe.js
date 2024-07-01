import {model, Schema, Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json"

const recipeSchema = new Schema({
    name: {type: String,unique: true, required: true},
    CategoryId: {type:Types.ObjectId, ref: 'Category', required: true},
    description:{type:String, requires: true},
    ingredients: [{type: String}],
    image: { type: String, required: true },
    favourite: {type: Boolean, default: false }
},{
    timestamps:true
});

recipeSchema.plugin(toJSON);

export const RecipeModel = model('Recipe', recipeSchema);