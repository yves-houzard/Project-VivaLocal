// import modules
import axios from 'axios';

// Import Selector
import { errorInterceptor } from '../selectors';

// import actions
import { companyT, appT } from '../action-types';
import {
  actionsCompanyDisplay,
  actionsEditingInput,
  actionsEditingDisplay,
  actionsCompany,
} from '../actions/company';
import {
  actionRequestError,
  actionsLoading,
  actionCountProSucces,
} from '../actions/appLvl';

// server
import server from './server.config';
import { shapedObject, companyShape } from '../tools';

const companyMW = (store) => (next) => async (action) => {
  // state
  const userId = store.getState().user.id;
  const companyError = store.getState().input.companyRegister;

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
    case appT.COUNT_PROFESSIONAL: {
      try {
        const res = await axios.get(`${server}/company/count`);
        // console.log('Résponse COMPTEUR : ', res.data.count);
        const actionCount = Number(res.data.count);
        store.dispatch(actionCountProSucces(actionCount));
      }
      catch (err) {
        console.error(err);
      }
      break;
    }

    case companyT.GET_COMPANY: {
      store.dispatch(actionsLoading(true));
      try {
        const res = await axios.get(`${server}/companybyuser/${userId}`, headerOptions);
        store.dispatch(actionsLoading(false));
        /* fill company state */
        store.dispatch(actionsCompanyDisplay(res.data));
        store.dispatch(actionsEditingInput(res.data));
      }
      catch (error) {
        console.error(error);
        store.dispatch(actionsLoading(false));
        const msgError = errorInterceptor(error, companyError);
        store.dispatch(actionRequestError(msgError));
      }
      break;
    }

    case companyT.REGISTER: {
      const dataToSend = store.getState().input.companyRegister;
      dataToSend.user_id = userId;
      try {
        // console.log("TOKEN COMPANY",token);
        await axios.post(`${server}/companies/${userId}`, dataToSend, headerOptions);
        store.dispatch(actionsCompany());
      }
      catch (error) {
        const msgError = errorInterceptor(error, companyError);
        store.dispatch(actionRequestError(msgError));
      }
      break;
    }
    /* Edition of company data */
    case companyT.REGISTER_EDITING: {
      const { company } = store.getState();
      const fields = store.getState().input.companyEditing;
      let dataToSend = { ...company, ...fields };
      dataToSend = shapedObject(companyShape, dataToSend);
      if (dataToSend.image === null) dataToSend.image = 'default';
      console.log('DATA TO SEND AFTER RESHAPE', dataToSend);
      try {
        const res = await axios.post(`${server}/companies/${userId}`, dataToSend, headerOptions);
        console.log('DATA RES', res.data);
        store.dispatch(actionsEditingDisplay(res.data));
      }
      catch (error) {
        console.error(error);
        store.dispatch(actionRequestError(error.response.data));
        const msgError = errorInterceptor(error, companyError);
        store.dispatch(actionRequestError(msgError));
      }
      break;
    }

    default:
      next(action);
  }
};

export default companyMW;
