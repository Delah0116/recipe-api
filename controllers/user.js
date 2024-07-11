import bcrypt from "bcrypt";
import { UserModel } from "../models/user.js";

export const register = async (req, res, next) => {
  try {
    // hash the user password
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    // create a new user
    const registeredUser = await UserModel.create({
      ...req.body,
      password: hashedPassword,
    });

    // Return Response {NB: 201 means created}
    res.status(201).json("User registered Sucessfully");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // Find a user with their unique identifier

    const user = await UserModel.findOne({
      // $or is what this db will understand as or. ie it will allow uer to be located by and to log either through email/username/phone
      $or: [{ email: email }, { username: username }, { phone: phone }],
      // email: email,
    });

    if (!user) {
      res.status(401).json("No user found");
    } else {
      // verify their password
      const correctPassword = bcrypt.compareSync(password, user.password);
      if (!correctPassword) {
        // return response
        res.status(401).json("Invalid credentials");
      } else {
        // Generate a session}
        req.session.user = { id: user._id };
        res.status(200).json("LogIn Sucessfully");
      }
    }
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
 try {
   // destroy user session
   await req.session.destroy();
   // return response
   register.status(200).json('Logout Sucessful');
 } catch (error) {
  next(error);
 }
};


export const profile = async ( req, res, next) => {
  try {
    // find user by ID
    const user = await UserModel
    .findById(req.session.user.id)
    .select({ password: false});

    // return response
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
