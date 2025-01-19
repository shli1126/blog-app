import { MongoClient } from "mongodb";
import { faker } from "@faker-js/faker";
import dotenv from "dotenv";


dotenv.config({ path: "../../.env" });
const dbName = "test"; // Replace with your database name
const collectionName = "posts"; // Replace with your collection name

async function insertData() {
    console.log("Current Working Directory:", process.cwd());
    console.log(process.env.MONGO);
    
  const client = new MongoClient(process.env.MONGO);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Generate a large number of objects
    const data = [];
    for (let i = 0; i < 1000; i++) {
      data.push({
        userId: faker.database.mongodbObjectId(), // Random MongoDB ObjectId
        content: faker.lorem.paragraph(), // Random content
        title: faker.lorem.words(3), // Random title
        image: faker.image.url(), // Random image URL
        category: faker.helpers.arrayElement(["uncategorized", "tech", "sports", "news"]), // Random category
        slug: faker.helpers.slugify(faker.lorem.words(3)), // Random slug
        createdAt: new Date(), // Current timestamp
        updatedAt: new Date(),
      });
    }

    // Insert data into the collection
    const result = await collection.insertMany(data);
    console.log(`${result.insertedCount} documents inserted`);
  } catch (err) {
    console.error("Error inserting data:", err);
  } finally {
    await client.close();
  }
}

insertData();
