import {fetch} from './csrf'

const NEW_DECK = 'deck/new'
const HOME_DECKS = 'deck/home'
const SEARCH_DECKS = 'deck/search'

const newDeck = (deck) => ({
  type: NEW_DECK,
  deck,
})

const homeDecks = (decks) => ({
  type: HOME_DECKS,
  decks
})

const setDecks = (decks) => ({
  type: SEARCH_DECKS,
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

export const searchDecks = (query) => async (dispatch) => {
  const res = await fetch('/api/decks/search', {
    method: "POST",
    body: JSON.stringify({'query': query})
  })
  const decks = res.data;
  dispatch(setDecks(decks));
  return decks
};


const initialState = {
  deck: null,
  homeDecks: null,
  searchDecks: null,
}

function decksReducer(state = initialState, action) {
  let newState;
  switch(action.type) {
    case NEW_DECK:
      newState = Object.assign({}, state, {deck:action.deck})
      return newState
    case HOME_DECKS:
      newState = Object.assign({}, state, {homeDecks: action.decks})
      return newState;
    case SEARCH_DECKS:
      newState = Object.assign({}, state, {searchDecks: action.decks})
      return newState;
    default:
      return state;
  }
}


export default decksReducer;
