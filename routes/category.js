import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category-con.js";

// Create A router

const categoryRouter = Router();

// define Routes
categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories', postCategory);

// export ROuter
export default categoryRouter;