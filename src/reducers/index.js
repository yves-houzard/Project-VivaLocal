import { combineReducers } from 'redux';
import authent from './authent';
import input from './input';
import toggle from './toggle';
import search from './search';
import user from './user';
import company from './company';
import appLvl from './appLvl';
import loading from './loading';

export default combineReducers({
  authent,
  input,
  toggle,
  search,
  user,
  company,
  appLvl,
  loading,
});
