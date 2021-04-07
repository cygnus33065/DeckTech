const express = require('express');
const asyncHandler = require('express-async-handler')
const Sequelize = require('sequelize');

const {Card} = require('../../db/models')

const router = express.Router();


router.get('/random', asyncHandler(async (req,res) => {
  const {id} =req.body;
  // const response = await Card.findByPk(id)
  const response = await Card.randomCard()
  const url = response.dataValues.art_url
  return res.json({url});
}))


module.exports = router
