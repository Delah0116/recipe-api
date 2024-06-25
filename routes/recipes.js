import { Router } from "express";

// Create a Router
const recipesRouter = Router();

// Define router
recipesRouter.get('/recipes', (req, res) => {
    res.json('All recipes');
});

// Add recipe
recipesRouter.post('/recipes', (req, res) =>{
    res.json('New Recipe Added');
});

//update patch 
recipesRouter.patch('/recipes/:id',(req, res) => {
    res.json(`Recipe updated with ${req.params.id} updated`);
});

// Delete
recipesRouter.delete('/recipes/:id', (req, res) => {
    res.json(`Recipe with id ${req.params.id} deleted.Thank You`);
});

// Export router
export default recipesRouter;