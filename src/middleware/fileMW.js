// modules
import axios from 'axios';
// import cloudinary from 'cloudinary-core';

// server address
import server from './server.config';

// test server
// const TEST_SERVER = 'http://nicolas-pustovalov.vpnuser.lan:4500/api/upload';

// types
import { appT } from '../action-types';

// actions
import { actionUploadPicSuccess } from '../actions/appLvl';

const fileMiddleware = (store) => (next) => async (action) => {
  // console.log('fileMW', action.type);
  switch (action.type) {
    case appT.UPLOAD_PICTURE_TRY:
      try {
        next(action);
        /* we let action pass in order to handle loader if any */
        // next(action);
        console.log('PAYLOAD', action.payload);
        const { file, productId } = action.payload;
        const userId = store.getState().user.id;
        const companyId = store.getState().company.id;
        if (!companyId) throw new Error('Company Id is undefined');

        /* we have to create a form-data to pass the file */
        const form = new FormData();

        /* we send companyId and productId for file naming purpose (server-side) :
        companyId-productId for product image,
        companyId-main for company main picture.
        "main" is default value if productId is not provided.
         */

        /* We put the file in form. */
        form.set('file', file, file.name);
        /* we add IDs */
        form.set('company_id', companyId);
        if (productId) form.set('product_id', productId);

        console.log(form);

        const res = await axios.post(`${server}/api/upload/${userId}`, form,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: store.getState().authent.token,
            },
          });
        console.log('IMG SUCCESS UPLOAD ?', res.data);
        console.log(actionUploadPicSuccess(res.data, productId));
        /* we only send the path */
        store.dispatch(actionUploadPicSuccess(res.data.image, productId));
      }
      catch (e) {
        console.error(e.message);
      }
      break;

    default:
      next(action);
      break;
  }
};
export default fileMiddleware;
