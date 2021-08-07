const mongoose = require('mongoose')
const schema = mongoose.Schema

const productSchema = new schema({
  id: Number,
  title: String,
  price: Number,
  likes: Number,
  nutrition: {
    nutrients: [
      {
        name: String,
        amount: Number,
        unit: String,
        percentOfDailyNeeds: Number
      }
    ],
    caloricBreakdown: {
      percentProtein: Number,
      percentFat: Number,
      percentCarbs: Number
    },         
    calories: Number,
    fat: String,
    protein: String,
    carbs: String,
  },
  servings: {
    number: Number,
    size: Number,
    unit: String,
  },
  aisle: String,
  description: String,
  ingredientList: String,
  images: [{
      type: String
  }]
})

module.exports = mongoose.model('Product', productSchema)