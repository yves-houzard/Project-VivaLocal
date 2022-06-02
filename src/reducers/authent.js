/* we import action types */
import { authentT } from '../action-types';

/* we set initial state */
const initialState = {
  token: '',
  isVisible: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    /* authent succeeded */
    case authentT.SUCCESS:
      return {
        ...state,
        /* if payload contains a token, update */
        token: action.payload.token ? action.payload.token : state.token,
        isVisible: false,
      };

    /* user disconnect */
    case authentT.DISCONNECT:
      return initialState;

    case authentT.OPEN_FORM:
      return {
        ...state,
        isVisible: true,
      };

    case authentT.CLOSE_FORM:
      return {
        ...state,
        isVisible: false,
      };

    default:
      return state;
  }
};

export default reducer;
