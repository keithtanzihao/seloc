require('dotenv').config({ path: '../../.env' })

const { MongoClient } = require('mongodb')


function printSchema(data, indent) {

  let isNotKey = false

  for (let key in data) {
    if (key == '_id') continue
    if (!isNaN(key) && isNotKey) continue

    let dataType = (typeof data[key]).charAt(0).toUpperCase() + (typeof data[key]).slice(1)
    console.log(`${indent}${key}: ${dataType},`)
    isNotKey = true

    if (typeof data[key] == 'object') {
      printSchema(data[key], indent + '  ')
    }
  }
}


async function mongodbMain() {
  const db_url = process.env.DB_URL
  const client = MongoClient(db_url, {
    useUnifiedTopology: true
  })

  try {
    await client.connect()

    const selocDB = client.db('seloc')
    const product = await selocDB.collection('products').findOne({id: 6038});
    console.log(product)
    printSchema(product, "")

  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }
}

mongodbMain()