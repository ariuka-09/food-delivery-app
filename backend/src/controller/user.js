import { User } from "../models/userSchema.js";
import bcrypt from "bcrypt"

export const signUp = async (req, res)=>{
    const {email, password} = req.body
    try {
        const isRegistered = await User.findOne({email:email});

        
        
        if(!isRegistered){
             const hashedPassword  = bcrypt.hashSync(password, 1)
                console.log("hashedpass", hashedPassword);
            User.create({
                email:email,
                password:hashedPassword,
            })
            res.status(200).send("User successfully created")
        }else{
        res.status(401).send("this email has already been registered")
        }

     
    } catch (error) {
        res.status(500).send("error with creating a user")
        console.log("error", error);
        
    }
}
export const getUsers = async (req, res)=>{
    try {
    const result = await User.find();
    res.status(200).send(result);
    } catch (error) {
    res.status(403).send("cant get users")    
    }
    
}
export const logIn = async (req, res) =>{
    try {
        const {email, password} = req.body;
        const isRegistered = await User.findOne({email:email});
        console.log("is regis", isRegistered)
        const isCorrectPass =await bcrypt.compare(password, isRegistered.password)
        if(isCorrectPass){
            res.status(200).send("log in successful");
        }else{
            res.status(401).send("wrong password");
        }
    
    } catch (error) {
        res.status(500).send(error, "error")
    }
}