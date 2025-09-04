// getting mongodb
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  // my own cluster URI
  "mongodb+srv://edsan_db_user:pJo5UNwZnCPPjiD2@cluster0.amzhml0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // waiting for the connection to client

    await client.connect();
    // aftwerwards, let user know what happened.
    console.log("Connected successfully!");

    const db = client.db("task-manager");

    const result = await db.collection("users").insertMany([
      { name: "Andrew", age: 351 },
      {
        name: "eduardo",
        age: 34,
      },
      {
        type: "student",
        age: 35,
        favColor: "red",
        name: "tyler",
        getName: function () {
          return this.name;
        },
      },
    ]);
    console.log("User inserted successfully:", result.insertedIds);

    // const deleteResult = await db.collection("users").deleteOne();
    // console.dir(deleteResult.deletedCount);
  } catch (error) {
    console.log("Error: unable to....", error);
  } finally {
    await client.close();
  }
}

run();
