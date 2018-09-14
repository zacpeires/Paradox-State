const router = require('express').Router();
const { Enquiry } = require('../db/models')
module.exports = router

router.post("/new-enquiry", async (req, res, next) => {
  try {
    const newEnquiry = await Enquiry.create(req.body)
    res.json(newEnquiry)

  } catch(error) {
    next(error)
  }
})
