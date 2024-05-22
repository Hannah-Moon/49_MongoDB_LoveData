const { MongoClient } = require("mongodb");
require("dotenv").config(); // Load environment variables from .env file

const uri = process.env.MONGODB_URI; // Access the MongoDB URI from the environment variables

if (!uri) {
  console.error("MongoDB connection string is not defined in the .env file.");
  process.exit(1);
}

console.log(uri);

const client = new MongoClient(uri);
const dbname = "bank";

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log(`Connected to the ${dbname} database ⋆.˚🦋༘⋆`);
  } catch (err) {
    console.error(`Error connecting to the database: ${err}`);
  } finally {
    await client.close();
  }
};

// Run the connectToDatabase function
connectToDatabase();
