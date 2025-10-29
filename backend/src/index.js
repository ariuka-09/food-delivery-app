import { configDotenv } from "dotenv";
import express from "express"
import { connectDB } from "./database/db.js";
import bodyParser from "body-parser";
import { foodCategoryRouter } from "./routes/foodCategory.js";
import { userRouter } from "./routes/user.js";
import { foodRouter } from "./routes/food.js";

configDotenv();
const port = process.env.PORT;

const app = express();
app.use(bodyParser.json())

app.use('/foodCategory', foodCategoryRouter)

app.use('/user', userRouter)

app.use('/food', foodRouter)


app.listen(port, ()=>{
    console.log("server is live", port)
    connectDB();
})