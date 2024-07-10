import { Router } from "express";
import { deletedRecipe, getRecipe, getRecipes, patchRecipe, postRecipes } from "../controllers/recipe_controllers.js";
import { localUpload } from "../middlewares/uploads.js";
import { checkUserSession } from "../middlewares/auth.js";


// Create a Router
const recipesRouter = Router();


// Define router
recipesRouter.get('/recipes', getRecipes);

// a method that will Get a single Recipe 
recipesRouter.get('/recipes/:id', getRecipe);
// Add recipe
recipesRouter.post('/recipes', checkUserSession, localUpload.single('image'), postRecipes);

//update patch 
recipesRouter.patch('/recipes/:id', checkUserSession, patchRecipe);

// Delete
recipesRouter.delete('/recipes/:id', checkUserSession, deletedRecipe);


// Export router
export default recipesRouter;














// MJE3b9kD5J8YSxFl

