// types
import { appT, searchT } from '../action-types';

const initialState = {
  loading: true,
  isRegistered: false,
  count: 0,
  scrollVal: 0,
  error: '',
  oneCompany: {
    address: '',
    city: '',
    communication: null,
    coordinates: {
      lng: 0,
      lat: 0,
    },
    created_at: '',
    detail: null,
    id: 2,
    image: null,
    mail: '',
    name: '',
    phone: '',
    updated_at: '',
    user_id: 0,
    zip: '',
    product: [],
  },
};

const appLvl = (state = initialState, action = {}) => {
  switch (action.type) {
    case appT.REQUEST_ERROR:
      return {
        ...state,
        /* payload is code error. */
        error: action.payload,
      };

    case appT.LOADING: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case searchT.GET_ONE_PROFESSIONAL_SUCCESS: {
      return {
        ...state,
        oneCompany: {
          ...state.oneCompany,
          ...action.payload,
        },
      };
    }

    case appT.COUNT_PROFESSIONAL_SUCCESS: {
      console.log('STATE appLvl COUNT : ', action.payload);
      return {
        ...state,
        count: action.payload,
      };
    }

    case appT.SCROLLBAR_SET:
      return {
        ...state,
        scrollVal: action.payload,
      };

    default:
      return state;
  }
};

export default appLvl;
