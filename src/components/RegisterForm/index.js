// modules
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// components
import ButtonUI from '../ButtonUI';
import AppInput from '../AppInput';
import NewCompany from '../NewCompany';
import MessageBox from '../MessageBox';

// import local
import './style.scss';

// import field config
import fields from './field.config';

// import acions
import { actionRegister } from '../../actions/register';
import { actionSetInput } from '../../actions/appLvl';

const RegisterForm = () => {
  // consts
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { role } = useSelector((state) => state.input.register);
  const { token } = useSelector((state) => state.authent);
  const roleInUser = useSelector((state) => state.user.role);
  const { error } = useSelector((state) => state.appLvl);

  // functions
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionRegister());
  };

  const handleRoleSelection = (e) => {
    dispatch(actionSetInput('register', 'role', e.target.value));
  };

  /* if user is registered : navigate to search page */
  useEffect(() => {
    if (token && role === 'user') navigate('/search');
  }, [token]);

  /* if user has just been registered and role is pro, ask for company registration */
  if (token && roleInUser === 'pro') return <NewCompany />;

  return (
    <div className="forms-wrapper">
      {error && (
      <MessageBox>{error}</MessageBox>
      )}
      <form className="register__form" onSubmit={handleSubmit}>
        <h2 className="register__title">Créer mon compte</h2>
        <label htmlFor="register-role-user">
          <input
            value="user"
            type="radio"
            name="role"
            id="register-role-user"
            defaultChecked
            className="register__radio"
            onChange={handleRoleSelection}
          />
          Particulier
        </label>

        <label htmlFor="register-role-pro">
          <input
            value="pro"
            type="radio"
            name="role"
            id="register-role-pro"
            className="register__radio"
            onChange={handleRoleSelection}
          />
          Professionnel
        </label>
        {
          fields.map((el) => (
            <AppInput
              {...el}
              key={`register-${el.name}`}
              className="register__field"
              nameSpace="register"
            />
          ))
        }
        <ButtonUI type="submit" className="register__validation">Valider</ButtonUI>
      </form>
    </div>
  );
};

export default RegisterForm;
