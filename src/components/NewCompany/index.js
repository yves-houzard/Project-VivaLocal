// Import module
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Import component
import AppInput from '../AppInput';
import ButtonUI from '../ButtonUI';
import MessageBox from '../MessageBox';

// import field config
import fields from './fields.config';

// import actions
import { actionsCompany, actionsCompanyRegister } from '../../actions/company';

// style
import './style.scss';

export default function NewCompany() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // state
  const { error } = useSelector((state) => state.appLvl);
  const company = useSelector((state) => state.company);
  // Function handle
  // if Cancel redirect /search
  const handleClickCancel = () => {
    navigate('/search');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionsCompanyRegister());
  };
  useEffect(() => {
    navigate('/pro/mycompany');
  }, [company]);

  return (
    <div className="forms-wrapper">
      {error && (
        <MessageBox>{error}</MessageBox>
      )}
      <form className="new-company" onSubmit={handleSubmit}>
        <h2 className="register__title --short">Créer ma société</h2>
        <ButtonUI type="button" onClick={handleClickCancel} className="new-company__cancel">Plus tard</ButtonUI>
        {fields.map((field) => (
          <AppInput
            {...field}
            key={`new-company__${field.name}`}
            className="new-company__field"
            nameSpace="companyRegister"
          />
        ))}
        <ButtonUI type="submit" className="new-company__submit">Valider</ButtonUI>
      </form>
    </div>
  );
}
