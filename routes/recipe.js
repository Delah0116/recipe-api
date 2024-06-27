import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";
import { deletedRecipe, getRecipe, getRecipes, patchRecipe, postRecipes } from "../controllers/recipe_controllers.js";

// Create a Router
const recipesRouter = Router();

// Define routerimport
recipesRouter.get('/recipes', getRecipes);

// Add recipe
recipesRouter.post('/recipes', postRecipes);

//update patch 
recipesRouter.patch('/recipes/:id', patchRecipe);

// Delete
recipesRouter.delete('/recipes/:id', deletedRecipe);

// a method that will Get a single Recipe 
recipesRouter.get('/recipes/:id', getRecipe);


// MJE3b9kD5J8YSxFl

// Export router
export default recipesRouter;