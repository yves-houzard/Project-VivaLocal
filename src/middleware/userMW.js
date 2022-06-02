/* eslint-disable camelcase */
import axios from 'axios';

import { toast } from 'react-toastify';

// Import action types :
import { userT } from '../action-types';
import { actionRequestError } from '../actions/appLvl';
import { actionAuthentSuccess } from '../actions/authent';
import {
  actionGetFavorites,
  actionAddFavoritesSuccess,
  actionGetFavoritesSuccess,
  actionDelFavoritesSuccess,
} from '../actions/user';

// Selector
import { errorInterceptor } from '../selectors';

// server
import server from './server.config';

const userMW = (store) => (next) => async (action) => {
  const userId = store.getState().user.id;
  // config request headers
  const { token } = store.getState().authent;
  const headerOptions = {
    headers: {
      // eslint-disable-next-line quote-props
      'authorization': token,
      'Content-Type': 'application/json',
    },
  };

  switch (action.type) {
    // case userT.REDIRECT_AT_LOADING:
    //   console.log("USER IDENTIFIED, LET LOAD SEARCH ENGINE ?");
    //   break;

    case userT.DELETE_FAVORITES: {
      const idFav = action.payload;
      console.log('ID Favorites to del : ', idFav);
      try {
        const res = await axios.delete(`${server}/user/favorites/${idFav}/${userId}`, headerOptions);
        console.log('DELETE FAVORITES : ', res.data);

        store.dispatch(actionDelFavoritesSuccess(idFav));
      }
      catch (err) {
        console.error(err.message);
      }
      break;
    }

    case userT.ADD_FAVORITES: {
      const infoPro = action.payload;
      // console.log(infoPro);

      const dataToSend = { ...infoPro, user_id: userId };
      // console.log('dataToSend : ', dataToSend);
      try {
        const res = await axios.post(`${server}/user/favorites/${userId}`, dataToSend, headerOptions);
        console.log('ADD FAVORITES : ', res.data);

        // const resolvePromise = new Promise((resolve) => setTimeout(resolve, 3000));

        // const notify = () => {
        //   toast.promise(
        //     resolvePromise, // c'est ça qui résoud la promesse
        //     {
        //       pending: 'Ajout aux Favoris en cours !',
        //       success: 'Favoris aujouté',
        //       error: 'Erreur, veuillez réessayer svp 🤯',
        //     },
        //   );
        // };
        // notify();
        store.dispatch(actionAddFavoritesSuccess());
        store.dispatch(actionGetFavorites());
      }
      catch (err) {
        console.error(err.message);
      }
      break;
    }

    case userT.GET_FAVORITES: {
      try {
        console.log('Request address Add Favorites : ', `${server}/user/favorites/${userId}`);
        const res = await axios.get(`${server}/user/favorites/${userId}`, headerOptions);
        console.log('GET FAVORITES : ', res.data);
        store.dispatch(actionGetFavoritesSuccess(res.data));
      }
      catch (err) {
        console.error(err.message);
      }
      break;
    }

    case userT.FILL_EDIT_USER_FORM:
      /* We get user info from state */
      try {
        const {
          first_name,
          last_name,
          pseudo,
          phone,
          mail,
          address,
          zip,
          city,
          role,
        } = store.getState().user;
        /* we pass it to action payload */
        action.payload = {
          first_name,
          last_name,
          pseudo,
          phone,
          mail,
          address,
          zip,
          city,
          role,
        };
        /* we send action to reducer */
        next(action);
      }
      catch (e) {
        console.error(e);
      }
      break;

    case userT.SAVE_PROFILE: {
      /* we get user */
      const { user } = store.getState().user;
      /* we get data from edit from */
      const profileData = store.getState().input.editUser;
      /* we merge objects */
      const dataToSend = { ...user, ...profileData };
      try {
        const { password, password2 } = dataToSend;
        if (password !== password2) throw new Error('les champs de mot de passe ne correspondent pas');
        delete dataToSend.password2;
        const res = await axios.patch(`${server}/home/writeUserProfile/${userId}`, dataToSend, headerOptions);
        window.history.back();
        console.log('updateUser', res.data);
        /* we update user in state */
        store.dispatch(actionAuthentSuccess(res.data));
      }
      catch (e) {
        console.error(e);
        const msgError = errorInterceptor(e, profileData);
        store.dispatch(actionRequestError(msgError));
      }
      break;
    }

    default:
      next(action);
  }
};
export default userMW;
