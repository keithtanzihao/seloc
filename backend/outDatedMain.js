require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const productSchema = require('./schemas/ProductSchema')

const dbUrl = process.env.DB_URL
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

const app = express()
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('------ Mongoose Connected ------')
})

app.get('/api/', async (req, res) => {
  const product = await productSchema.find({})

  // res.setHeader('Content-Type', 'application/json');
  // res.json({product}) 

  res.json([{
    id: 1,
    username: 'whatever'
  }, {
    id: 2,
    username: 'brian'
  }])
  
})

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Server on port ${port}`)
})