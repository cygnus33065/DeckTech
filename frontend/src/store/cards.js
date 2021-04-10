import {fetch} from './csrf'

const SET_HOME_BANNER = 'home/banner';

const setBannerImg = (image) => ({
  type: SET_HOME_BANNER,
  image
})


export const getBannerImage = () => async (dispatch) => {
  const res = await fetch('/api/cards/random');
  dispatch(setBannerImg(res.data.url));
  return res;
}

export const searchCards = (query) => async (dispatch) => {
  console.log(query);
  const res = await fetch('/api/cards/search', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(query)
  })
  return res.json();
}

const initialState = {image: null};

function cardsReducer(state = initialState, action) {
  let newState;
  switch(action.type) {
    case SET_HOME_BANNER:
      newState = Object.assign({}, state, {image: action.image});
      return newState;
    default:
      return state;
  }
}

export default cardsReducer;
