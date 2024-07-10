import bcrypt from "bcrypt";
import { UserModel } from "../models/user.js";

export const register = async (req, res, next) => {
 try {
     // hash the user password
     const hashedPassword = bcrypt.hashSync(req.body.password, 10);
   
     // create a new user
   const registeredUser = await UserModel.create({
       ...req.body,
       password:hashedPassword
   })
   
   // Return Response {NB: 201 means created}
   res.status(201).json('User registered Sucessfully')
 } catch (error) {
    next (error);    
 }

 };
export const login = async () => {};

export const logout = async () => {};

export const profile = async () => {};
