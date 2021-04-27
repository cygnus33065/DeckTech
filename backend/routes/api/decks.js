const express = require('express');
const asyncHandler = require('express-async-handler')

const {Deck} = require('../../db/models');


const router = express.Router()


router.get('/', asyncHandler(async (req,res) => {
  const decks = await Deck.homePage()

  return res.json(decks);
}))

router.post('/search', asyncHandler(async (req,res) => {
  const {query} = req.body

  const search = await Deck.searchDecks(query)
  const decks = res.json(search)
  // console.log(decks)

  return decks
}))

router.get('/:id', asyncHandler(async(req,res) => {
  const id = req.params.id
  const deck = await Deck.findByPk(id);

  return res.json(deck);
}))

router.post('/', asyncHandler(async (req,res) => {
  const {name, commander_id, user_id} = req.body;
  const newDeck = await Deck.create({name, commander_id, user_id});
  return res.json(newDeck)
}))


module.exports = router;
