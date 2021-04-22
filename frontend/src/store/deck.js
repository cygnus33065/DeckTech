import {fetch} from './csrf'

const NEW_DECK = 'deck/new'
const HOME_DECKS = 'deck/home'

const newDeck = (deck) => ({
  type: NEW_DECK,
  deck,
})

const homeDecks = (decks) => ({
  type: HOME_DECKS,
  decks
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

export const homePageDecks = () => async (dispatch) => {
  const res = await fetch('/api/decks/')

  const decks = res.data
  dispatch(homeDecks(decks))
  return decks
}


const initialState = {deck: null}

function decksReducer(state = initialState, action) {
  let newState;
  switch(action.type) {
    case NEW_DECK:
      newState = Object.assign({}, state, {deck:action.deck})
      return newState
    case HOME_DECKS:
      newState = Object.assign({}, state, {homeDecks: action.decks})
      return newState;
    default:
      return state;
  }
}


export default decksReducer;
