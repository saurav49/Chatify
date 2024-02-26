const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });
import { DB_NAME } from "../constant";
async function connectToDb() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DATABASE_URL}/${DB_NAME}?retryWrites=true&w=majority`
    );
    console.log(
      `MongoDB Connected! DB host: ${connectionInstance.connection.host}`
    );
  } catch (e) {
    console.log(`MongoDB connection error:`, e);
    process.exit(1);
  }
}

module.exports = { connectToDb };
