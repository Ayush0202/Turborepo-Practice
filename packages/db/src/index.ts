import mongoose from "mongoose";

export default async function ConnectDB() {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log("DB Connected");
  } catch (error) {
    console.log("Error connecting DB ", error);
  }
}

export * from "./models/user";
