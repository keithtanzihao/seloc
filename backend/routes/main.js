let express = require('express')
let router = express.Router()

const productSchema = require('../schemas/ProductSchema')

router.get('/', async function (req, res, next) {
  const product = await productSchema.find({})
  res.json(product)

})

module.exports = router 