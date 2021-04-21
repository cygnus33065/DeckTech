import {fetch} from './csrf'

const SET_HOME_BANNER = 'home/banner';
const SET_CARDS = 'deck/cards';
const SET_COMMANDERS = 'cards/commanders';

const setBannerImg = (image) => ({
  type: SET_HOME_BANNER,
  image
})

const setCards = (cards) => ({
  type: SET_CARDS,
  cards,
})

const setCommanders = (commanders) => ({
  type: SET_COMMANDERS,
  commanders
})


export const getBannerImage = () => async (dispatch) => {
  const res = await fetch('/api/cards/random');
  dispatch(setBannerImg(res.data.url));
  return res;
}

export const searchCards = (query) => async (dispatch) => {
    const res = await fetch('/api/cards/search', {
    method: "POST",
    body: JSON.stringify({"query": query})
  })

  const cards = res.data
  dispatch(setCards(cards));
  return cards
}

export const getCommanders =  () => async (dispatch) => {
  const res = await fetch('/api/cards/commanders')
  const commanders = res.data
  dispatch(setCommanders(commanders));
  return commanders
}

const initialState = {image: null};

function cardsReducer(state = initialState, action) {
  let newState;
  switch(action.type) {
    case SET_HOME_BANNER:
      newState = Object.assign({}, state, {image: action.image});
      return newState;
    case SET_CARDS:
      newState = Object.assign({}, state, {cards: action.cards})
      return newState;
    case SET_COMMANDERS:
      newState = Object.assign({}, state, {commanders: action.commanders});
      return newState
    default:
      return state;
  }
}

export default cardsReducer;
