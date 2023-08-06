const mongoose = require("mongoose")

// Define the Tags schema
const contactUs = new mongoose.Schema({
  email: {
    type: String,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  message: {
    type: String,
  },
  phoneno: {
    type: Number,
  },
  countrycode: {
    type: Number,
  },
})

// Export the Tags model
module.exports = mongoose.model("ContactUs", contactUs)
