const fetch = require('node-fetch')

const getCards = async (url) => {
  const data = await fetch(url);
  const cards = await data.json();
  return cards.data
}


export default getCards;
// getCards("https://api.scryfall.com/cards/search?order=set&q=e%3Auma&unique=prints")
