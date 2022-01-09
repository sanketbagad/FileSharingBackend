import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db"


dotenv.config()

connectDB()
const app = express()
app.use(cors())

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})