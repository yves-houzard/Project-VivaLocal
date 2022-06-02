import PropTypes from 'prop-types';
// import module
import { useDispatch } from 'react-redux';
// import Actions
import { actionsToggleEditingInfos } from '../../../../actions/toggle';
import { actionsEditingSubmit } from '../../../../actions/company';
// import component
import AppInput from '../../../AppInput';
import ButtonUI from '../../../ButtonUI';
// style
import './style.scss';

export default function EditingInfos({ toggleEditing }) {
  const dispatch = useDispatch();
  // functions handle
  const handleClickClose = () => {
    dispatch(actionsToggleEditingInfos(toggleEditing));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionsEditingSubmit());
    dispatch(actionsToggleEditingInfos(toggleEditing));
  };
  return (
    <div className="settings-infos settings-infos--open">
      <button type="button" onClick={handleClickClose} className="settings-infos__close">
        <i className="fas fa-times" />
      </button>
      <form className="settings-infos__content" onSubmit={handleSubmit}>
        <div className="settings-infos__content-company">
          Adresse: <AppInput
            type="text"
            name="address"
            placeholder="Adresse"
            required
            className="settings-infos__field"
            nameSpace="companyEditing"
          />
        </div>
        <div className="settings-infos__content-company">
          Code Postal: <AppInput
            type="text"
            name="zip"
            placeholder="Code"
            required
            className="settings-infos__field"
            nameSpace="companyEditing"
          />
        </div>
        <div className="settings-infos__content-company">
          Ville: <AppInput
            type="text"
            name="city"
            placeholder="Ville"
            required
            className="settings-infos__field"
            nameSpace="companyEditing"
          />
        </div>
        <div className="settings-infos__content-company">
          Téléphone:<AppInput
            type="tel"
            name="phone"
            placeholder="Tél"
            required
            className="settings-infos__field"
            nameSpace="companyEditing"
          />
        </div>
        <div className="settings-infos__content-company">
          Email:<AppInput
            type="email"
            name="mail"
            placeholder="E-mail"
            required
            className="settings-infos__field"
            nameSpace="companyEditing"
          />
        </div>
        <div className="settings-infos__content-company">
          Description: <AppInput
            type="text"
            name="detail"
            placeholder="Description"
            required
            className="settings-infos__field"
            nameSpace="companyEditing"
          />
        </div>
        <ButtonUI
          type="submit"
          className="settings-infos__btn"
        >Enregistrer
        </ButtonUI>
      </form>
    </div>
  );
}

EditingInfos.propTypes = {
  toggleEditing: PropTypes.bool.isRequired,
};
