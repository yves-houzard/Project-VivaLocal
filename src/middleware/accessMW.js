
// import
import { searchT } from '../action-types';


const accessMiddleware = (store) => (next) => async (action) => {
  console.log('accessMW', action.type);
  switch (action.type) {
    case searchT.GET_PROFESSIONAL:
      try {
        /* we wait for token to be written in state */
        /* CODE TO DO WITHSUBSCRIBTION ? */
        // console.log(res);
        // if (res) next(action);
      }
      catch (e) {
        // history.replace('/');// we replace current URL with new one
        // history.go(0);// zero is the position in history : current URL. We move to it.
        console.error(e.message);
      }
      break;

    default:
      next(action);
      break;
  }
};
export default accessMiddleware;
