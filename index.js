var MongoClient = require('mongodb').MongoClient;

var URL = "mongodb+srv://joy:gvVDrmKNiKSF3XQt@cluster0.thgjuqm.mongodb.net/?retryWrites=true&w=majority";

// This function connects to MongoDB and returns the client
async function connectToMongo() {
    try {
        const client = new MongoClient(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log("Mongo connected");
        return client;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
connectToMongo();

// This function inserts data into MongoDB using the provided client
async function insertData(MyMongoClient) {
    try {
        // Make sure MyMongoClient is not undefined before accessing its properties
        if (!MyMongoClient) {
            throw new Error("MyMongoClient is undefined");
        }

        const MyDataBase = MyMongoClient.db("school");
        const MyCollection = MyDataBase.collection('student');

        const MyData = { name: "komar", Roll: "51", Class: "Ten", City: "Naogaon" };

        const result = await MyCollection.insertOne(MyData);
        console.log("Data insert successful:");
    } catch (error) {
        console.error("Data insert fail:");
        throw error;
    }
}

//Use async/await to handle the promise returned by connectToMongo
async function main() {
    try {
        const client = await connectToMongo();
        await insertData(client);
    } catch (error) {
        console.error(error);
    }
}

main();



// DeleteOneItem();

// function DeleteOneItem(MyMongoClient){
//     const MyDataBase = MyMongoClient.db('school');
//     const MyCollection = MyDataBase.collection('student');

//     var DeleteItem={Roll:'10'}

//     MyCollection.deleteOne(DeleteItem,function(error){
//         if(error){
//             console.log("data delete fail");
//         }
//         else{
//             console.log("data delete success");
//         }
//     })
//}



// async function FindAllDataQuery(MyMongoClient) {
//     try {
//         // Make sure MyMongoClient is not undefined before accessing its properties
//         if (!MyMongoClient) {
//             throw new Error("MyMongoClient is undefined");
//         }

//         const MyDataBase = MyMongoClient.db("school");
//         const MyCollection = MyDataBase.collection('student');

//         const Query = { Roll: "50" };

//        result = await MyCollection.find(Query).toArray
//         console.log(result);
       
        
//     } catch (error) {
//         console.error("Data find fail:");
//         throw error;
//     }
// }
