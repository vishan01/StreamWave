const mongoose =require("mongoose");

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed", error);
        process.exit(1);
    }
}

export { connectDB };