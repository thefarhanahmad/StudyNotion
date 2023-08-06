const { contactUsEmail } = require("../mail/templates/contactFormRes")
const mailSender = require("../utils/mailSender")
const contactUs = require("../models/ContactUs")

exports.contactUsController = async (req, res) => {
  const { email, firstname, lastname, message, phoneNo, countrycode } = req.body
  console.log(req.body)
  try {

    // sending mail to user
    const emailRes = await mailSender(
      email,
      "Your Data sent successfully",
      contactUsEmail(email, firstname, lastname, message, phoneNo, countrycode)
    )
    console.log("Email Res ", emailRes)

   
    try {
       // save data in DB
    await contactUs.create({
      email:email,
      firstname:firstname,
      lastname:lastname,
      message:message,
      phoneno:phoneNo,
      countrycode:countrycode
    })
    console.log("form data saved successfully")
    } catch (error) {
      console.log("error occured while saving form data")
    }

    return res.json({
      success: true,
      message: "Email send successfully",



    })
  } catch (error) {
    console.log("Error", error)
    console.log("Error message :", error.message)
    return res.json({
      success: false,
      message: "Something went wrong...",
    })
  }
}
