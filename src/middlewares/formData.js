const busboy = require('busboy')
const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const formData = (req, res, next) => {
  const bb = busboy({ headers: req.headers })
  req.body = {}

  bb.on('field', (key, value) => {
    req.body[key] = value
  })

  bb.on('file', (key, stream) => {
    const cloud = cloudinary.uploader.upload_stream(
      { upload_preset: 'auto-market-preset' },
      (err, res) => {
        if (err) throw new Error('Something went wrong')

        console.log("Response from cloudinary", res)
      }
    )

    stream.on('data', (data) => {
      cloud.write(data)
    })

    stream.on('end', () => {
      cloud.end()
    })
  })

  bb.on('finish', () => {
    next()
  })

  req.pipe(bb)
}

module.exports = {
  formData
}