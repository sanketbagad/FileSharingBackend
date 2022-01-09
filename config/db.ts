import mongoose from "mongoose"

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL!, {
           
        })
    } catch (error: any) {
        console.error("Error connecting to database", error.message)
    }

    const connection = mongoose.connection
if (connection.readyState >= 1) {
    console.log("Database is connected")
    return;
}
connection.on("error", console.error.bind(console, "MongoDB connection error:"))

}


export default connectDB