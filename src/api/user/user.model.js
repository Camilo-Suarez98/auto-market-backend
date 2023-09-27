const { Schema, model, models } = require('mongoose')

const emailRegex = new RegExp('[a-zA-Z0-9]{5,10}@[a-z]{3,10}.com')

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"]
    },
    email: {
      type: String,
      match: [emailRegex, 'Email is not valid'],
      validate: [{
        validator: async (value) => {
          try {
            const user = await models.user.findOne({ email: value })
            return !user
          } catch (error) {
            return false
          }
        },
        message: 'Email already exists'
      }]
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "The password must contain at least 8 characters between numbers and letters"]
    },
    profileImage: {
      type: String,
      required: false
    },
    phone: String,
    cars: {
      type: [{ type: Schema.Types.ObjectId, ref: 'car' }],
      required: false
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const User = model('user', userSchema)

module.exports = User