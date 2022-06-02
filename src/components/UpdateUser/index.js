// Imports
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import AppInput from '../AppInput';
import ButtonUI from '../ButtonUI';
import MessageBox from '../MessageBox';

// config from RegisterForm
import fieldsConfig from '../RegisterForm/field.config';

// Styling from RegisterForm
import '../RegisterForm/style.scss';

// actions
import { actionFillEditUserInputs, actionSaveUserProfile } from '../../actions/user';

// TODO REFACTOR USER FORMS

const UpdateUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.appLvl);
  // const history = useHistory();
  const fields = fieldsConfig.map((el) => (
    {
      /* we copy field object */
      ...el,
      /* we find user field with same name and put in the value */
      value: user[el.name],
    }));

  /* we populate fields with state when user is loaded */
  useEffect(() => {
    console.log('FILL please');
    dispatch(actionFillEditUserInputs());
  }, [user]);

  const handleSave = (e) => {
    e.preventDefault();
    console.log('PLEASE IMPLEMENT SAVE');
    dispatch(actionSaveUserProfile());
  };
  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="forms-wrapper">
      { error && (
        <MessageBox>{error}</MessageBox>
      )}
      <form name="update-user-form" className="register__form" onSubmit={handleSave}>
        <h2 className="register__title">Éditer mon profil</h2>
        {
          fields.map((el) => (
            <AppInput
              {...el}
              key={`update-user-${el.name}`}
              className="register__field"
              nameSpace="editUser"
            />
          ))
        }
        <ButtonUI type="button" className="register__validation" onClick={handleCancel}>Annuler</ButtonUI>
        <ButtonUI type="submit" className="register__validation">Enregistrer les modifications</ButtonUI>
      </form>
    </div>
  );
};

export default UpdateUser;
