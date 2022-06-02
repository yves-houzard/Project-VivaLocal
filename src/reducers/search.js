/* we import action types */
import { searchT } from '../action-types';

const initialState = {
  // dispatch information from coordinatesMiddleware :
  canLocate: false,
  origin: { // user position
    coordinates: { // type is object LatLng from leaflet
      // Commune de Tranzault centre de la France :
      lng: 1.858636,
      lat: 46.620679,
    },
    zoom: 6,
  },
  results: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case searchT.SUCCESS:
      return {
        ...state,
        origin: {
          ...state.origin,
          coordinates: action.payload,
          zoom: 13,
        },
      };

    case searchT.SET_CAN_LOCATE:
      return {
        ...state,
        canLocate: action.payload,
        zoom: 13,
      };

    case searchT.GET_PROFESSIONAL_SUCCESS:
      return {
        ...state,
        results: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
