import {fetch} from './csrf'

const SET_HOME_BANNER = 'home/banner';
const SET_CARDS = 'deck/cards'

const setBannerImg = (image) => ({
  type: SET_HOME_BANNER,
  image
})

const setCards = (cards) => ({
  type: SET_CARDS,
  cards,
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
    default:
      return state;
  }
}

export default cardsReducer;
