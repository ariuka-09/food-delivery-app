import { Router } from "express";
import { createFoodCategory, getFoodCategory } from "../controller/index.js";

export const foodCategoryRouter = Router();
foodCategoryRouter.post('/', createFoodCategory).get('/', getFoodCategory)