const fetch = require('node-fetch')

const getCards = async (url) => {
  const data = await fetch(url);
  const cards = await data.json();
  // console.log(cards.data)
  return cards.data
}

module.exports = {getCards}
// getCards("https://api.scryfall.com/cards/search?order=set&q=e%3Auma&unique=prints")
