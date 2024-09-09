import { MongoClient } from 'mongodb'
const url = 'mongodb://localhost/Test';

const mongoClient = new MongoClient(url)

mongoClient.connect(function(err, client) {
    if(err) throw new Error(`Error en conexión: ${error.message}`)
 
    const db = client.db('Test')

    const cursor = db.collection('inventory').find({})
    cursor.toArray(function(err,docs) {
        if(err) throw new Error(`Error en lectura inventory: ${error.message}`)
        
        console.log('----- inventory -----')
        docs.forEach(doc => {
            console.log(doc)
        })

    });
})