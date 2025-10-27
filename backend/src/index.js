import { configDotenv } from "dotenv";
import express from "express"
import { connectDB } from "./database/db";

configDotenv();
const port = process.env.PORT;

const app = express();
app.listen(port, ()=>{
    console.log("server is live", port)
    connectDB();
})