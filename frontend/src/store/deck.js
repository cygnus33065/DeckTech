import {fetch} from './csrf'

const NEW_DECK = 'deck/new'

const newDeck = (deck) => ({
  type: NEW_DECK,
  deck,
})

export const createDeck = ({deckName, commander_id, user_id}) => async (dispatch) => {
  
}
