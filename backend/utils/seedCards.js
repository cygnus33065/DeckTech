const {getCards} = require ('./getCards')


const createCardObjects = async () => {
  const sets = [ "m21", "iko", "thb", "eld", "m20", "war", "cmr", "2xm", "znc", "c20", "c19", "mh1", "rna", "grn", "c18", "bbd", "dom", "c17", "akh", "hou", "c16", "kld", "aer", "dtk", "frf", "ktk", "c14", "m15", "cns", "jou", "bng", "ths"]
  const cards = []

  for (let j = 0; j < sets.length; j++){
    // console.log(sets[j])
    const data =  await getCards(`https://api.scryfall.com/cards/search?order=set&q=e%3A${sets[j]}&unique=prints`)
    for (let i = 0; i < data.length; i++){
      // console.log(data[i].name)
      const cardObj = {
        name:data[i].name,
        image_url:data[i].image_uris.border_crop,
        art_url:data[i].image_uris.art_crop,
        mana_value:data[i].cmc,
        gatherer:data[i].related_uris.gatherer,
        color_identity:data[i].color_identity.length ? data[i].color_identity : null,
        keywords:data[i].keywords.length ? data[i].keywords : null,
        type:data[i].type_line,
        isLegal:data[i].legalities.commander,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      cards.push(cardObj)
    }
  }
  console.log(cards[0])
  return cards
}
createCardObjects()
module.exports = {createCardObjects}
