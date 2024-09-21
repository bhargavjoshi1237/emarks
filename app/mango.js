// app/page.js
import { MongoClient } from 'mongodb';

async function mangox({owner}) {
  const uri = "mongodb+srv://bhargavjoshi1237:Shiro123@cluster0.pwwbqv5.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    const startTime = Date.now(); // Start the timer to track response time

    // Connect to MongoDB
    await client.connect();
    
    // Select the database and collection
    const db = client.db("jack"); // Replace with your actual database name
    const collection = db.collection("jack1"); // Replace with your actual collection name

    // Fetch the data from the collection
    const data = await collection.find({ "owner": owner }).toArray();

    // Close the MongoDB connection
    await client.close();

    const endTime = Date.now(); // End the timer
    const responseTime = endTime - startTime; // Calculate response time in milliseconds

    return { data, responseTime }; // Return the fetched data and response time

  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    throw new Error("Failed to fetch data from MongoDB.");
  }
 
}
export default mangox;