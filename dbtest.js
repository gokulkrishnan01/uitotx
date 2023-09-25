const { MongoClient} = require("mongodb");

const uri = "mongodb://localhost:27017/uitoux";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    await client.db("uitoux").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
