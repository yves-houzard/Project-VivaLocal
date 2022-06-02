// axios
import axios from 'axios';

// import actions
import { productT } from '../action-types';
import {
  actionsProductSuccess,
  actionsDelectProductSucess,
  // actionsProductEditingInput,
  // actionFillProductInputs,
  actionUpdateItemCardSuccess,
} from '../actions/product';
import { actionRequestError } from '../actions/appLvl';

// server
import server from './server.config';

/* tools */
import { shapedObject } from '../tools';
import { errorInterceptor } from '../selectors';

import defaultImage from '../assets/images/itemCard.jpg';

const productShape = {
  id: 0,
  type: '',
  name: '',
  image: 'default',
  detail: '',
  price_kg: 'true',
  price: '',
  company_id: 0,
};

const productMW = (store) => (next) => async (action) => {
  const { token } = store.getState().authent;
  const companyId = store.getState().company.id;
  const userId = store.getState().user.id;
  const headerOptions = {
    headers: {
      // eslint-disable-next-line quote-props
      'authorization': token,
      'Content-Type': 'application/json',
    },
  };
  switch (action.type) {
    case productT.REGISTER: {
      const dataToSend = store.getState().input.productRegister;
      dataToSend.company_id = companyId;
      try {
        const res = await axios.post(`${server}/items/${userId}`, dataToSend, headerOptions);
        /* we don’t want null in image but empty string ? */
        if (!res.data.image) res.data.image = '';
        console.log(res.data);
        store.dispatch(actionsProductSuccess(res.data));
      }
      catch (error) {
        console.log(error);
        store.dispatch(actionRequestError("une erreur s'est produite lors de l'enregitrement du produit"));
      }
      break;
    }

    case productT.DELETE: {
      const productId = action.payload;
      try {
        await axios.delete(`${server}/items/${productId}/${userId}`, headerOptions);
        store.dispatch(actionsDelectProductSucess(productId));
      }
      catch (error) {
        console.log(error);
      }
      break;
    }

    // case productT.GET_PRODUCT: {
    //   const productId = action.payload;
    //   try {
    //     const res = await axios.get(`${server}/items/${productId}`, headerOptions);
    //     store.dispatch(actionsProductEditingInput(res.data));
    //   }
    //   catch (error) {
    //     console.log(error);
    //   }
    //   break;
    // }

    case productT.UPDATE_TRY: {
      const productId = action.payload;
      const fields = store.getState().input[`editProduct-${productId}`];
      /* we have to send image field to back no matter what. we get it from company state. */
      const product = store.getState().company.product.find((el) => el.id === productId);

      /* we merge inputs with data in company product list */
      let dataToSend = { ...product, ...fields };
      dataToSend = shapedObject(productShape, dataToSend);
      // if (dataToSend.image === null) dataToSend.image = { defaultImage };
      if (dataToSend.image === null || dataToSend.image.length === 0) dataToSend.image = 'default';
      console.log('TO UPDATE', dataToSend);
      try {
        const res = await axios.post(`${server}/items/${userId}`, dataToSend, headerOptions);
        store.dispatch(actionUpdateItemCardSuccess(res.data));
      }
      catch (error) {
        console.log(error);
        const msgError = errorInterceptor(error, product);
        store.dispatch(actionRequestError(msgError));
      }
      break;
    }

    default:
      next(action);
  }
};

export default productMW;

// "type": "legume",
// "name": "salade",
// "detail": "mffgfgfdfdffd sdfsddf",
// "price_kg": "false",
// "price": "4",
// "image": "link",
// "company_id":43
