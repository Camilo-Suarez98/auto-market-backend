const { Schema, model } = require('mongoose')

const carScema = new Schema(
  {
    brand: String,
    model: String,
    engineDisplacement: String,
    year: String,
    km: String,
    location: String,
    fuel: String,
    color: String,
    price: String,
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