const { Schema, model } = require('mongoose')

const carImagesSchema = new Schema(
  {
    url: {
      type: String,
      required: false
    },
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