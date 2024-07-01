import express from "express";
import mongoose from "mongoose";
import expressOasGenerator from "express-oas-generator";
import recipesRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category.js";

// Connect to DB
await mongoose.connect(process.env.MONGO_URL);

// create express app
const app = express();
expressOasGenerator.handleResponses(app, {
    tags: ['categories', 'recipes'],
    mongooseModels: mongoose.modelNames(),
})

// Apply Middlewares
app.use(express.json());


// Use routes
app.use(recipesRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));


// Listen for incomming request
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port $(port)`);
});
