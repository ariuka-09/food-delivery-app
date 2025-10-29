import { Router } from "express";
import { getUsers, logIn, signUp, updateUser } from "../controller/user.js";

export const userRouter = Router();
userRouter
.post('/signUp', signUp)
.get('/', getUsers)
.post('/logIn',logIn )
.patch('/:id', updateUser)