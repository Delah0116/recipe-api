import { Router } from "express";
import { RecipeModel } from "../models/recipe.js";

// Create a Router
const recipesRouter = Router();

// Define routerimport
recipesRouter.get('/recipes', (req, res) => {
    res.json('All recipes');
});

// Add recipe
recipesRouter.post('/recipes', async (req, res) =>{
    // Add recipe to database
    await RecipeModel.create(req.body);
    // return response
    res.json("Recipe Added");
});

//update patch 
recipesRouter.patch('/recipes/:id', (req, res) => {
    res.json(`Recipe updated with ${req.params.id} updated`);
});

// Delete
recipesRouter.delete('/recipes/:id', (req, res) => {
    res.json(`Recipe with id ${req.params.id} deleted.Thank You`);
});

// a method that will Get a single Recipe 
recipesRouter.get('/recipes/:id', (req, res) => {
    res.json(`Recipe with id ${req.params.id} received`)
});


// MJE3b9kD5J8YSxFl

// Export router
export default recipesRouter;