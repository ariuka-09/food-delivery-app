import { Router } from "express";
import { getUsers, logIn, signUp } from "../controller/user.js";

export const userRouter = Router();
userRouter
.post('/signUp', signUp)
.get('/', getUsers)
.post('/logIn',logIn )