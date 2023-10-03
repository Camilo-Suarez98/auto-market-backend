const { Schema, model } = require('mongoose')

const carScema = new Schema(
  {
    brand: String,
    model: String,
    engineDisplacement: String,
    year: String,
    km: String,
    location: {
      type: String,
      required: [true, " Location is required"]
    },
    fuel: {
      type: String,
      required: [true, "Fuel type is required"]
    },
    color: String,
    price: {
      type: String,
      required: [true, "The price is required"]
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true
    },
    carImages: {
      type: [{ type: Schema.Types.ObjectId, ref: 'carImage' }],
      required: false
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const Car = model('car', carScema)
module.exports = Car