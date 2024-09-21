import { MongoClient, ObjectId } from 'mongodb';

const uri = "mongodb+srv://bhargavjoshi1237:Shiro123@cluster0.pwwbqv5.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

export async function POST(req) {
  try {
    // Parse the incoming request body
    const body = await req.json();

    // Create a new document with ObjectId for _id
    const newBookmark = {
      _id: new ObjectId(), // Generate a new ObjectId
      id: Math.floor(1000000 + Math.random() * 9000000),
      edited: "",
      name: body.name,
      linkCount: 1,
      icon: "search",
      bgimage: "https://placehold.co/400",
      title: body.name,
      url: body.links,
      folder: body.folder,
      pageName: body.pageName,
      priority: body.priority,
      description: body.description,
      owner: body.owner,

      created: new Date(),
      extra: "",
      extra0: "",
    };

    // Connect to the database
    await client.connect();
    const database = client.db('Emarks');
    const collection = database.collection('bookmarks');

    // Insert the new bookmark into the collection
    const result = await collection.insertOne(newBookmark);

    // Return a success response
    return new Response(JSON.stringify({ success: true, insertedId: result.insertedId }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error saving bookmark:', error);
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
