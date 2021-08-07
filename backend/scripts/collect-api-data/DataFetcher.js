/*
Removed existing seeded data from spoonacular. Gonna do the seeding later, 
focus on the front end first before poulating the database. 

Will be using just one product to fill up product components first.
*/


require('dotenv').config({ path: '../../.env' })

const readline = require('readline')
const https = require('https')
const fs = require('fs')

const mongoose = require('mongoose')
const productSchema = require('../../schemas/ProductSchema')


const commandPrompt = () => {
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  let recursiveUserInput = () => {
    rl.question(
      'Select one of the following commands: \n1) New\n2) Exit\n',
      (ans) => {
        if (ans === 'exit') {
          return rl.close()
        } else if (ans === 'new') {
        }
        recursiveUserInput()
      }
    )
  }
}


const checkProductImg = (product_id, api_key) => {

  let testurl = `https://spoonacular.com/productImages/${product_id}-636x393.jpg?apiKey=${api_key}`

  return new Promise((resolve) => {
    https.get(testurl, (res) => {

      // Tidy up error handling later
      if (res.statusCode !== 200) {
        reject(new Error(`Request Failed. \n' + 'Status Code: ${statusCode}`))
      }

      res.on('data', (chunk) => {
        // Do nothing
      })
      res.on('end', () => {
        try {
          // You must resolve/reject the promise no matter what
          if (res.headers['content-length'] < 10000) {
            resolve({ id: product_id, image: false })
          } else {
            resolve({ id: product_id, image: true })
          }

        } catch (e) {
          console.error(e.message)
        }
      })
    })
  })
}

const createProductItem = (product_id, api_key) => {

  let url = `https://api.spoonacular.com/food/products/${product_id}?apiKey=${api_key}`
  console.log(url)


  return new Promise((resolve) => {
    https.get(url, (res) => {

      let error

      res.setEncoding('utf8')
      let requestData = ''

      res.on('data', (chunk) => {
        requestData += chunk
      })
      res.on('end', () => {
        try {
          const parseData = JSON.parse(requestData)   

          const product_new = new productSchema({
            id: parseData.id,
            title: parseData.title,
            price: parseData.price,
            likes: parseData.likes,
            nutrition: {
              nutrients: parseData.nutrition.nutrients,
              caloricBreakdown: {
                percentProtein: parseData.nutrition.percentProtein,
                percentFat: parseData.nutrition.percentFat,
                percentCarbs: parseData.nutrition.percentCarbs
              },
              calories: parseData.nutrition.calories,
              fat: parseData.nutrition.fat,
              protein: parseData.nutrition.protein,
              carbs: parseData.nutrition.carbs,
            },
            servings: {
              number: parseData.servings.number,
              size: parseData.servings.size,
              unit: parseData.servings.unit
            },
            aisle: parseData.aisle,
            description: parseData.description,
            ingredientList: parseData.ingredientList,
            images: parseData.images
          })

          resolve(product_new)

        } catch (e) {
          console.error(e.message)
        }
      })
    })
  })
}

async function testing(product_id, api_key) {

  let obj = []

  try {
    let index = 0

    while (index <= 0) {
      const hasImage = await checkProductImg(product_id, api_key)

      if (hasImage.image === true) {
        const parseData = await createProductItem(product_id, api_key)
        console.log(`ID (${hasImage.id}): Success`)
        obj.push(parseData)
        index++
      }
      product_id++
    }

    // Helps with remembering the last ID requested since API has limit of 150 requests
    let jsonLastID = JSON.stringify({ lastProductID: product_id })
    fs.writeFile('lastProductID.json', jsonLastID, 'utf8', (err) => {
      if (err) throw err
    })

  } catch (error) {
    console.log(error.message)
  }

  return obj
}


async function addProduct(db, newProducts) {
  const result = await db.collection('products').insertMany(newProducts)
  console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
  console.log(result.insertedIds);
}


// Use this link to log into Mongodb shell mongo "mongodb+srv://cluster0.3y4e8.mongodb.net/myFirstDatabase" --username keithtanzihao
async function mongodbMain(execCallback) {

  const db_url = process.env.DB_URL
  try {
    await mongoose.connect(db_url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
  } catch(error) {
    console.err('DataFetcher Error !')
  }
  console.log('------ DataFetcher Connected To Mongoose ------')
  execCallback // Dont have to add parenthesis you baboon 
}

// Callback as mongoose connect is asynchronous
async function mongodbExec() { 
  console.log('mongodbExec Running')
  let product_id = 5975 // First product item i think
  let file = './lastProductID.json'
  let api_key = 'c54fc793d8d742a19ab5936f577292e2'


  if (fs.existsSync(file)) {
    let fileParsed = JSON.parse(fs.readFileSync(file, 'utf8'))
    product_id = fileParsed.lastProductID
  }
  const result = await createProductItem(189780, 'c54fc793d8d742a19ab5936f577292e2')
  await result.save()
  mongoose.connection.close()
}


mongodbMain(mongodbExec())



return
