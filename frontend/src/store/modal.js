const MODAL_OPEN_LOGIN = 'loginModal/Open'
const MODAL_CLOSE_LOGIN = 'loginModal/Close'
const MODAL_OPEN_SIGNUP = 'signupModal/Open'
const MODAL_CLOSE_SIGNUP = 'signupModal/Close'
const DRAWER_OPEN_SEARCH = 'searchDrawer/open'
const DRAWER_CLOSE_SEARCH = 'searchDrawer/close'
const DRAWER_OPEN_CARD_SEARCH = 'cardSearchDrawer/open'
const DRAWER_CLOSE_CARD_SEARCH = 'cardSearchDrawer/close'
const NEW_DECK_CLOSE = 'newDeck/close'
const NEW_DECK_OPEN = 'newDeck/open'

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

export const openCardSearch = () => {
  return {
    type: DRAWER_OPEN_CARD_SEARCH,
  }
}

export const closeCardSearch = () => {
  return {
    type: DRAWER_CLOSE_CARD_SEARCH,
  }
}

export const newDeckOpen = () => {
  return {
    type: NEW_DECK_OPEN,
  }
}

export const newDeckClose = () => {
  return {
    type:NEW_DECK_CLOSE,
  }
}

const initialState = {
  loginShow: false,
  signupShow: false,
  searchDrawer: false,
  cardSearchShow: false,
  newDeck: true,
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
    case DRAWER_OPEN_CARD_SEARCH:
      newState = Object.assign({}, state, {cardSearchShow: true});
      return newState;
    case DRAWER_CLOSE_CARD_SEARCH:
      newState = Object.assign({}, state, {cardSearchShow: false});
      return newState;
    case NEW_DECK_OPEN:
      newState = Object.assign({}, state, {newDeck: true});
      return newState;
    case NEW_DECK_CLOSE:
      newState = Object.assign({}, state, {newDeck: false});
      return newState;
      default:
      return state;
    }
}

export default modalReducer;
