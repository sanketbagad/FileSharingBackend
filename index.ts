import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db"
import fileRoutes from "./routes/files"

dotenv.config()

connectDB()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/files", fileRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})