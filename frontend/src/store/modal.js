const MODAL_OPEN_LOGIN = 'loginModal/Open'
const MODAL_CLOSE_LOGIN = 'loginModal/Close'
const MODAL_OPEN_SIGNUP = 'signupModal/Open'
const MODAL_CLOSE_SIGNUP = 'signupModal/Close'
const DRAWER_OPEN_SEARCH = 'searchDrawer/open'
const DRAWER_CLOSE_SEARCH = 'searchDrawer/close'

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

export const openSignup = () => {
  return {
    type: MODAL_OPEN_SIGNUP,
  }
}

export const closeSignup = () => {
  return {
    type: MODAL_CLOSE_SIGNUP,
  }
}

export const openSearch = () => {
  return {
    type: DRAWER_OPEN_SEARCH,
  }
}

export const closeSearch = () => {
  return {
    type: DRAWER_CLOSE_SEARCH,
  }
}


const initialState = {
  loginShow: false,
  signupShow: false,
  searchDrawer: false,
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
    case MODAL_OPEN_SIGNUP:
      newState = Object.assign({}, state, {signupShow: true});
      return newState;
    case MODAL_CLOSE_SIGNUP:
      newState = Object.assign({}, state, {signupShow: false});
      return newState;
    case DRAWER_OPEN_SEARCH:
      newState = Object.assign({}, state, {searchShow: true});
      return newState;
    case DRAWER_CLOSE_SEARCH:
      newState = Object.assign({}, state, {searchShow: false});
      return newState;
    default:
      return state;
    }
}

export default modalReducer;
