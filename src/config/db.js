import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.DATABASE_URL);
        // console.log(connection);
        console.log(`MongoDB connected Successfully!`);

    }
    catch (error) {
        console.log("Error in db connection", error);
    }

}

export default connectDB;
