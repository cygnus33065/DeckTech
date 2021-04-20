import {fetch} from './csrf'

const NEW_DECK = 'deck/new'

const newDeck = (deck) => ({
  type: NEW_DECK,
  deck,
})

export const createDeck = () => async (dispatch) => {

}
