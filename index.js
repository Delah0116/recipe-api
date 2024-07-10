import express from "express";
import mongoose from "mongoose";
import expressOasGenerator from "express-oas-generator";
import session from "express-session";
import recipesRouter from "./routes/recipe.js";
import categoryRouter from "./routes/category.js";
import userRouter from "./routes/user.js";

// Connect to DB
await mongoose.connect(process.env.MONGO_URL);

// create express app
const app = express();
expressOasGenerator.handleResponses(app, {
  alwaysServeDocs: true,
  tags: ["categories", "recipes"],
  mongooseModels: mongoose.modelNames(),
});

// Apply Middlewares
// app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

// Use routes
app.use(userRouter);
app.use(recipesRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect("/api-docs/"));

// Listen for incomming request
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port $(port)`);
});
