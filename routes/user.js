import { Router } from "express";
import { register, login, profile, logout } from "../controllers/user.js";
import { checkUserSession } from "../middlewares/auth.js";

// Create router
const userRouter = Router();

// Define routes
userRouter.post('/register', register);

userRouter.post('/login', login);

userRouter.get('/logout', checkUserSession, logout);

userRouter.get('/profile', checkUserSession, profile);



// Export router
export default userRouter;
