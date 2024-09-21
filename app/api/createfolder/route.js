import { MongoClient, ObjectId } from 'mongodb';

const uri = "mongodb+srv://bhargavjoshi1237:Shiro123@cluster0.pwwbqv5.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

export async function POST(req) {
  try {
    // Parse the incoming request body
    const body = await req.json();
    const { email, folderName } = body;

    // Connect to the database
    await client.connect();
    const database = client.db('Emarks');
    const collection = database.collection('uesrs');

    // Fetch the user's data by email
    const user = await collection.findOne({ email: email });

    // If no user is found, throw an error
    if (!user) {
      throw new Error('User not found');
    }

    // Create a new folder object
    const newFolder = {
      _id: new ObjectId(), // Generate a new ObjectId
      name: folderName,
      icon: "folder", // Default icon, customize as needed
      pages: [], // Initialize with an empty array for pages
      created: new Date(),
    };

    // Add the new folder to the user's folders array
    user.folders.push(newFolder);

    // Update the user's document with the modified folders array
    const result = await collection.replaceOne(
      { email: email },
      user
    );

    // Check if the user was updated successfully
    if (result.modifiedCount === 0) {
      throw new Error('Failed to update user');
    }

    // Return a success response
    return new Response(JSON.stringify({ success: true, insertedId: newFolder._id }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error saving folder:', error);
    return new Response(JSON.stringify({ success: false, message: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } finally {
    await client.close(); // Close the connection after the operation
  }
}
