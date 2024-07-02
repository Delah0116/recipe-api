import { CategoryModel } from "../models/category.js";

export const getCategories = async (req, res, next) => {
  try {
    // Get query Params
    const { limit, skip, filter, fields } = req.query;
    // get all categories from DB
    const allcategories = await CategoryModel
      .find(JSON.parse (filter))
      .select(JSON.parse (fields))
      .limit(limit)
      .skip(skip);
    // Return Response
    res.status(200).json(allcategories);
  } catch (error) {
    next(error);
  }
};

export const postCategory = async (req, res, next) => {
  try {
    // Add category to DB
    const newCategory = await CategoryModel.create({
      // spreading method
      ...req.body,
      image: req.file.filename,
    });
    // Response
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};
