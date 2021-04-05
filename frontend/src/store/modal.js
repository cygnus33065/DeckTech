const MODAL_OPEN_LOGIN = 'loginModal/Open'
const MODAL_CLOSE_LOGIN = 'loginModal/Close'


export const openLogin = () => {
  return {
    type: MODAL_OPEN_LOGIN,
  };
};

export const closeLogin = () => {
  return {
    type: MODAL_CLOSE_LOGIN
  };
};


const initialState = {
  loginShow: false,
}

const modalReducer = (state = initialState, action) => {
    let newState;
  switch (action.type) {
    case MODAL_OPEN_LOGIN:
      newState = Object.assign({}, state, {loginShow: true});
      return newState;
    case MODAL_CLOSE_LOGIN:
      newState = Object.assign({}, state, {loginShow: false});
      return newState;
    default:
      return state;
    }
}

export default modalReducer;
