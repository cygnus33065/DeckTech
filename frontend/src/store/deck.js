import {fetch} from './csrf'

const NEW_DECK = 'deck/new'

const newDeck = (deck) => ({
  type: NEW_DECK,
  deck,
})

export const createNewDeck = ({deckName, commander_id, user_id}) => async (dispatch) => {
  const res = await fetch('/api/decks/', {
    method: 'POST',
    body: JSON.stringify({'name': deckName, "commander_id": commander_id, 'user_id': user_id })
  })

  const deck =res.data;
  dispatch(newDeck(deck));
  return deck
}


const initialState = {deck: null}

function decksReducer(state = initialState, action) {
  let newState;
  switch(action.type) {
    case NEW_DECK:
      newState = Object.assign({}, state, {deck:action.deck})
      return newState
    default:
      return state;
  }
}


export default decksReducer;
