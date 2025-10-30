import bodyParser from "body-parser"
import express from "express"
import {configDotenv} from "dotenv"
 
configDotenv();
const app = express()
const port = 