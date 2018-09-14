const Sequelize = require('sequelize')
const db = require('../db')

const enquriy = db.define('enquiry', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  // interestedIn: {
  //   type: Sequelize.STRING,
  //   allowNull: false
  // },
  message: {
    type: Sequelize.TEXT,
    allowNull: true
  }
})

module.exports = enquriy
