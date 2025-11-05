import dotenv from "dotenv"
import express from "express"
import { connectDB } from "./database/db.js";
import bodyParser from "body-parser";
import { foodCategoryRouter } from "./routes/foodCategory.js";
import { userRouter } from "./routes/user.js";
import { foodRouter } from "./routes/food.js";
import cors from "cors"


dotenv.config();
const port = process.env.PORT;

const app = express();




app.use(cors({
    origin: "*",
}))

app.use(express.json());

app.use('/foodCategory', foodCategoryRouter)
app.use('/user', userRouter)
app.use('/food', foodRouter)


app.listen(port, ()=>{
    console.log("server is live", port)
    connectDB();
})

connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log("server is live", port)
    });
}).catch(err=>{
    console.error("failed to connect to mongoDB", err)
})
// import { configDotenv } from "dotenv";
// import express from "express";
// import cors from "cors";
// import { connectDB } from "./database/db.js";
// import { foodCategoryRouter } from "./routes/foodCategory.js";
// import { userRouter } from "./routes/user.js";
// import { foodRouter } from "./routes/food.js";

// configDotenv();

// const app = express();
// const port = process.env.PORT || 5000;

// // ✅ Middleware (order matters!)
// app.use(cors({
//   origin: "http://localhost:3000", // more secure for dev
//   credentials: true,
// }));

// app.use(express.json()); // 👈 parses JSON request body
// app.use(express.urlencoded({ extended: true })); // optional for form data

// // ✅ Routes (after middleware)
// app.use("/foodCategory", foodCategoryRouter);
// app.use("/user", userRouter);
// app.use("/food", foodRouter);

// // ✅ Start server
// app.listen(port, () => {
//   console.log("✅ Server is live on port", port);
//   connectDB();
// });
