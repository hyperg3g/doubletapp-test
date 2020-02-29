const { MongoClient } = require(`mongodb`)

const url = process.env.DATABASE_URL || 'mongodb://localhost:27017'
const connOpt = { useNewUrlParser: true, useUnifiedTopology: true }

module.exports = MongoClient.connect(url, connOpt)
    .then(client => client.db(process.env.DATABASE_NAME))
    .catch(err => {
        console.error(`Failed to connect to MongoDB: ${ err }`)
        process.exit(1)
    })