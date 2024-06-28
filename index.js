import express from "express";
import mongoose from "mongoose";
import recipesRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category.js";

// Connect to DB
await mongoose.connect(process.env.MONGO_URL);

// create express app
const app = express();

// Apply Middlewares
app.use(express.json());


// Use routes
app.use(recipesRouter);
app.use(categoryRouter);


// Listen for incomming request
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port $(port)`);
});
