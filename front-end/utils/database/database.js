import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    // mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log('Mongodb is already connected');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "portfolio_genesis",
            useNewUrlParser: true,     // Use the new URL parser
            useUnifiedTopology: true, // Use the new server discovery and monitoring engine
        });
        isConnected = true;
        console.log("Mongodb connection established");
    } catch (err) {
        console.log(err);
    }
}