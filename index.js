import express from "express";
import mongoose from "mongoose";
import recipesRouter from "./routes/recipe.js";

// Connect to DB
await mongoose.connect(process.env.MONGO_URL);

// create express app
const app = express();

// Apply Middlewares
app.use(express.json());

// Define Routes
app.get('/',(req,res) => {
    res.send('Welcome Home');
});

// another route
app.post('/login',(req,res) => {
    res.json('Login successful');
});

app.patch('/',(req,res) => {
    res.json('Hallo master');
});

app.delete('/',(req,res) => {
    res.json("Pink world");
});

// Use routes
app.use(recipesRouter);


// Listen for incomming reuest
app.listen(3000, () => {
    console.log('App listening on port 3000');
});
