import { MongoClient } from 'mongodb'
const url = 'mongodb://localhost/Test';

const mongoClient = new MongoClient(url)

try {
    const client = await mongoClient.connect()
    const db = client.db('Test')

    let cursor = db.collection('inventory').find({})
    
    console.log('----- inventory -----')
    /* while(await cursor.hasNext()) {
        console.log(await cursor.next())
    } */
    for await (let doc of cursor) {
        console.log(doc)
    }
    
    client.close()
}
catch(error) {
    console.log('error', error.message)
}