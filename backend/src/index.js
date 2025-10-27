import { configDotenv } from "dotenv";
import express from "express"
import { connectDB } from "./database/db.js";
import bodyParser from "body-parser";
import { foodCategoryRouter } from "./routes/index.js";

configDotenv();
const port = process.env.PORT;

const app = express();
app.use(bodyParser.json())

app.use('/foodCategory', foodCategoryRouter)

app.listen(port, ()=>{
    console.log("server is live", port)
    connectDB();
})