import { RecipeModel } from "../models/recipe.js";

// Get all recipes
export const getRecipes = async (req, res, next) => {
  try {
    // Get query Params
    const { limit, skip, filter } = req.query;
    // Get all recipes from database
    const allRecipes = await RecipeModel
    .find({ name: filter })
    .limit(limit)
    .skip(skip);
    // Return all recipes as response
    res.json(allRecipes);
  } catch (error) {
    next(error);

  }
}

// Post recipes
export const postRecipes = async (req, res, next) => {
  try {
    // Add recipe to database
    const allRecipes = await RecipeModel.create({
      ...req.body,
    image: req.file.filename
    });
    // return response
    res.json(allRecipes);
  } catch (error) {
    next(error);
  }
}

// Patch recipe
export const patchRecipe = (req, res) => {
  res.json(`Recipe updated with ${req.params.id} updated`)
};

//Delete Recipe
export const deletedRecipe = async (req, res, next) => {
  try {
    // Delete by Id
    const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
    // Return response
    res.json(deletedRecipe);
  } catch (error) {
    next(error);
  }
};

// Get Recipe
export const getRecipe = (req, res) => {
  res.json(`Recipe with id ${req.params.id} received`);
};



