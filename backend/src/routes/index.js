import { Router } from "express";
import { createFoodCategory, getFoodCategory, updateFoodCategory } from "../controller/index.js";

export const foodCategoryRouter = Router();
foodCategoryRouter.post('/', createFoodCategory).get('/', getFoodCategory).patch('/:id', updateFoodCategory )