const { Schema, model } = require('mongoose')

const carImagesSchema = new Schema(
  {
    url: String,
    car: {
      type: Schema.Types.ObjectId,
      ref: 'car'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const CarImage = model('carImage', carImagesSchema)

module.exports = CarImage