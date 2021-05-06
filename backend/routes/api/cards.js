const express = require('express');
const asyncHandler = require('express-async-handler')


const {Card, DeckCard} = require('../../db/models')

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

router.get('/commanders', asyncHandler(async (req,res) => {
  const commanders = await Card.commanders();
  return res.json(commanders)
}))

router.post('/deck', asyncHandler(async (req,res) => {
  const {deck_id} = req.body;
  const deckCards = await DeckCard.findAll({where: deck_id})

  const cards = res.json(deckCards);
  return cards;
}))

module.exports = router
