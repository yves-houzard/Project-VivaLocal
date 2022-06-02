// import modules
import axios from 'axios';

// types
import { authentT, registerT } from '../action-types';

// selector
import { errorInterceptor } from '../selectors';

// actions
import { actionAuthentFail, actionAuthentSuccess } from '../actions/authent';
import { actionRequestError } from '../actions/appLvl';
// import { actionSetUser } from '../actions/user';

// server
import server from './server.config';
// const server = 'http://nicolas-pustovalov.vpnuser.lan:4500';
// console.log(process.env);

const logMiddleware = (store) => (next) => async (action) => {
  // state
  const userRegisterError = store.getState().input.register;
  const userLoginError = store.getState().input.authent;
  switch (action.type) {
    // Authentication and fetch user data with token and id (in action payload)
    case authentT.TRY_WITH_TOKEN:
      try {
        const { token, id } = action.payload;
        const res = await axios.get(`${server}/home/users/${id}`, {
          headers: { Authorization: token },
        });
        console.log('access with token', res.data);
        const { role } = res.data;
        /* we send data from  localstorage (action.payload) containing
        token and id, and we add user data (res.data). Send to store ! */
        store.dispatch(actionAuthentSuccess({ ...action.payload, ...res.data }));

        /* If there is a company for this pro user, we populate state with it, too. */
        // if (role === 'pro') {
        //   const companyRes = await axios.get(`${server}/companybyuser/${id}`, {
        //     headers: { Authorization: token },
        //   });
        //   console.log("my company", companyRes.data);
        //   store.dispatch(actionsCompanyDisplay(companyRes.data));
        // }
      }
      catch (e) {
        console.error(e.message);
        store.dispatch(actionAuthentFail());
      }
      break;
    case authentT.TRY:
      /* connection request */
      try {
        const credentials = store.getState().input.authent;
        const res = await axios.post(`${server}/home/login`, // check route
          credentials,
          {
            headers: { 'Content-Type': 'application/json' },
          });
        const token = res.headers.authorization;
        /* if succeeded let’s store in state and local storage : token and user minimum info */
        console.log('AUTHENT RETURN', res.data);
        store.dispatch(actionAuthentSuccess({ token, ...res.data }));
      }
      catch (e) {
        console.error(e.message);
        const msgError = errorInterceptor(e, userLoginError);
        store.dispatch(actionRequestError(msgError));
      }
      break;

    case registerT.TRY:
      try {
        /* we get input data from register form, in state */
        const dataToSend = store.getState().input.register;
        console.log('WHO ?', dataToSend);

        /* we check if mail inputs are alike or throw error */
        const { password, password2 } = dataToSend;
        if (password !== password2) throw new Error('les champs de mot de passe ne correspondent pas');

        /* we delete unwanted data */
        delete dataToSend.password2;
        // console.log(dataToSend);
        const res = await axios.post(`${server}/home/registration`,
          dataToSend,
          {
            headers: { 'Content-Type': 'application/json' },
          });
        const user = res.data;
        console.log('REGISETERED WHO', user);
        const token = res.headers.authorization;
        console.log(token);
        store.dispatch(actionAuthentSuccess({ token, ...user }));
      }
      catch (e) {
        const msgError = errorInterceptor(e, userRegisterError);
        store.dispatch(actionRequestError(msgError));
      }
      break;

    case authentT.SUCCESS:
      {
        /* we extract some data from payload, put it with token in localStorage */
        const { token, id } = action.payload;
        localStorage.setItem('maraicher', JSON.stringify({ token, id }));
        /* next we put data in state */
        next(action);
      }

      break;

    case authentT.DISCONNECT:
      // console.log('test disconnect');
      /* we remove token from localStorage */
      localStorage.removeItem('maraicher');
      next(action);
      break;

    default:
      /* We let incoming action pass */
      next(action);
      break;
  }
};

export default logMiddleware;
