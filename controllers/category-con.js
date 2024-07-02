import { CategoryModel } from "../models/category.js";

export const getCategories = async (req, res, next) => {
    try {
        // get all categories from DB
        const allcategories = await CategoryModel.find();
        // Return Response
        res.status(200).json(allcategories);
    } catch (error) {
        next(error);
    }
}

export const postCategory = async (req, res, next) => {
 try {
    // Add category to DB
    const newCategory = await CategoryModel.create({
        // spreading method
        ...req.body,
        image: req.file.filename
    });
    // Response
    res.status(201).json(newCategory)
 } catch (error) {
    next(error);
    
 }
}