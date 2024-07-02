import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category-con.js";
import { localUpload } from "../middlewares/uploads.js";

// Create A router

const categoryRouter = Router();

// define Routes
categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories', localUpload.single('image'), postCategory);

// export ROuter
export default categoryRouter;