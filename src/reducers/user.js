/* eslint-disable padded-blocks */
/* we import action types */
import { userT, authentT } from '../action-types';

/* we set initial state */
const initialState = {
  id: '',
  last_name: '',
  first_name: '',
  pseudo: '',
  address: '',
  zip: '',
  city: '',
  mail: '',
  phone: '',
  password: '',
  role: '',
  favorite: [],
  nbrFav: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case authentT.SUCCESS:
      delete action.payload.token; // we delete unwanted props
      return {
        ...state,
        ...action.payload,
      };

    case authentT.DISCONNECT:
      return initialState;

    case userT.GET_FAVORITES_SUCCESS: {
      return {
        ...state,
        favorite: [
          ...action.payload,
        ],
      };
    }

    case userT.DELETE_FAVORITES_SUCCESS: {
      // console.log('ID à supp du state Favorites : ', action.payload);
      const newArrayFav = state.favorite.filter((el) => el.favorite_id !== action.payload);
      // console.log('newArrayFav à mettre dans le state : ', newArrayFav);
      return {
        ...state,
        favorite: [
          ...newArrayFav,
        ],
        nbrFav: state.nbrFav - 1,
      };
    }

    case userT.ADD_FAVORITES_SUCCESS: {
      return {
        ...state,
        nbrFav: state.nbrFav + 1,
      };
    }

    default:
      return state;
  }
};

export default reducer;
