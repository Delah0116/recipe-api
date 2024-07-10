import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category-con.js";
import { localUpload } from "../middlewares/uploads.js";
import { checkUserSession } from "../middlewares/auth.js";

// Create A router

const categoryRouter = Router();

// define Routes
categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories',checkUserSession, localUpload.single('image'), postCategory);

// export ROuter
export default categoryRouter;