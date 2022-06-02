// import modules
import axios from 'axios';
import L from 'leaflet';

// action-types
import { searchT } from '../action-types';

// actions
import {
  actionSearchSuccess, actionGetProSuccess, actionGetOneProSuccess,
} from '../actions/search';
import { errorInterceptor } from '../selectors';
import { actionRequestError } from '../actions/appLvl';

// server
import server, { apiGouv } from './server.config';

const coordinatesMiddleware = (store) => (next) => async (action) => {
  // config request headers
  const { token } = store.getState().authent;
  const searchError = store.getState().search;
  const headerOptions = {
    headers: {
      // eslint-disable-next-line quote-props
      'authorization': token,
      'Content-Type': 'application/json',
    },
  };

  // server API :
  // eslint-disable-next-line prefer-destructuring
  const address = store.getState().input.search.search;
  // console.log('address : ', address);
  switch (action.type) {
    case searchT.TRY: {
      const dataCoordinates = async (serverAPI) => {
        /* coordinates request */
        try {
          // console.log('server : ', server);
          const res = await axios.get(serverAPI);
          const actionRes = new L.LatLng(
            res.data.features[0].geometry.coordinates[1],
            res.data.features[0].geometry.coordinates[0],
          );
          // console.log('Réponse server: ', res.data);
          /* we get first line in result and get coordinates */
          // console.log('Résultat : ', actionRes);
          store.dispatch(actionSearchSuccess(actionRes));
        }
        catch (err) {
          console.error(err.message);
        }
      };
      dataCoordinates(`${apiGouv}${address}`);
      break;
    }

    case searchT.GET_PROFESSIONAL: {
      try {
        const res = await axios.get(`${server}/companies`, headerOptions);
        // console.log('GET Pro res : ', res.data);
        res.data.map((el) => delete el.siret);
        // console.log('Pro res modify : ', res.data);
        store.dispatch(actionGetProSuccess(res.data));
      }
      catch (err) {
        console.error(err.message);
        const msgError = errorInterceptor(err, searchError);
        store.dispatch(actionRequestError(msgError));
      }
      break;
    }

    case searchT.GET_ONE_PROFESSIONAL: {
      const idPro = action.payload;
      // console.log(idPro);
      try {
        const res = await axios.get(`${server}/companies/${idPro}`, headerOptions);
        console.log('RES get one pro : ', res.data);
        store.dispatch(actionGetOneProSuccess(res.data));
      }
      catch (err) {
        console.error(err);
      }
      break;
    }

    default:
      /* We let incoming action pass */
      next(action);
      break;
  }
};

export default coordinatesMiddleware;
