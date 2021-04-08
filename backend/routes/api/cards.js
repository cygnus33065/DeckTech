const express = require('express');
const asyncHandler = require('express-async-handler')
const Sequelize = require('sequelize');

const {Card} = require('../../db/models')

const router = express.Router();


router.get('/random', asyncHandler(async (req,res) => {
  const response = await Card.randomCard()
  const url = response.dataValues.art_url
  return res.json({url});
}))

router.get('/search'), asyncHandler(async (req,res) => {
  
})

module.exports = router
