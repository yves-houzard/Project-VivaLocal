// Imports
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  actionAuthent, actionDisconnect, actionOpenAuthentForm, actionCloseAuthentForm,
} from '../../actions/authent';
import AppInput from '../AppInput';

// Components
import MessageBox from '../MessageBox';

// Styling
import './style.scss';

import LogoutIcon from './logout_black_24dp';

const Authent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.authent.token);
  const isVisible = useSelector((state) => state.authent.isVisible);
  const { error } = useSelector((state) => state.appLvl);

  const handleConnect = (e) => {
    e.preventDefault();
    dispatch(actionAuthent());
  };

  const handleDisconnect = () => {
    dispatch(actionDisconnect());
    navigate('/');
  };

  /* open authentication form */
  const handleDisplay = () => {
    dispatch(actionOpenAuthentForm());
  };

  const formDOM = useRef();

  const handleOutsideClick = (e) => {
    /* if form is visible and click outside */
    if (isVisible && !formDOM.current.contains(e.target)) {
      dispatch(actionCloseAuthentForm());
    }
  };

  /* stale closure fix : each time isVisible changes, we update eventListener on document.  */
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isVisible]);

  return (
    <>
      <form onSubmit={handleConnect} ref={formDOM} className={isVisible ? 'authent__form --visible' : 'authent__form'}>
        { error && (
          <MessageBox className="authent__error">{error}</MessageBox>
        )}
        <AppInput nameSpace="authent" name="mail" placeholder="Identifiant (e-mail)" />
        <AppInput nameSpace="authent" type="password" name="password" placeholder="Mot de passe" />
        <button type="submit" className="authent__button">Ok</button>
      </form>
      {
        token && token !== 'null' ? ( // in case token exists with value 'null'
          <button
            type="button"
            className="authent__button__close"
            onClick={handleDisconnect}
          >
            <LogoutIcon />
          </button>
        )
          : (
            <button type="button" className="authent__button" onClick={handleDisplay}>S’identifier</button>
          )
      }
    </>
  );
};

Authent.propTypes = {

};

export default Authent;
