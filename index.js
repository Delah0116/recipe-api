import express from "express";
import mongoose from "mongoose";
import recipesRouter from "./routes/recipe.js";

// Connect to DB
await mongoose.connect(process.env.MONGO_URL);

// create express app
const app = express();

// Apply Middlewares
app.use(express.json());

// Use routes
app.use(recipesRouter);


// Listen for incomming reuest
app.listen(3000, () => {
    console.log('App listening on port 3000');
});
