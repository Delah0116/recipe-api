import express from "express";
import recipesRouter from "./routes/recipes.js";

// create express app
const app = express();

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
