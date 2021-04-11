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

router.post('/search', asyncHandler(async (req,res) => {
  const {query} = req.body

  const search = await Card.searchCards(query)
  const cards = res.json(search)
  // console.log(cards)

return cards
}))

router.get('/sample', asyncHandler(async (req,res) => {
  const response = await Card.sampleDeck();
  return res.json({response})
}))


module.exports = router
