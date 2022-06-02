import PropTypes from 'prop-types';
// import module
import { useDispatch } from 'react-redux';
// import component
import EditingInfos from './EditingInfos';
// import Actions
import { actionsToggleEditingInfos } from '../../../actions/toggle';
// import style
import './style.scss';

export default function SettingsInfos({ toggleEditing, company }) {
  const dispatch = useDispatch();
  // functions handle
  const handleClickEdit = () => {
    dispatch(actionsToggleEditingInfos(toggleEditing));
  };
  return toggleEditing ? (<EditingInfos toggleEditing={toggleEditing} />) : (
    <div className="settings-infos">
      <button type="button" onClick={handleClickEdit} className="settings-infos__edit">
        <i className="fas fa-edit" />
      </button>
      <div className="settings-infos__content">
        <div className="settings-infos__content-company">
          Adresse: <p>{company.address}</p>
        </div>
        <div className="settings-infos__content-company">
          Code Postal: <p>{company.zip}</p>
        </div>
        <div className="settings-infos__content-company">
          Ville: <p>{company.city}</p>
        </div>
        <div className="settings-infos__content-company">
          Téléphone: <p>{company.phone}</p>
        </div>
        <div className="settings-infos__content-company">
          Email: <p>{company.mail}</p>
        </div>
        <div className="settings-infos__content-company">
          Description: <p>{company.detail}</p>
        </div>
      </div>
    </div>
  );
}

SettingsInfos.propTypes = {
  toggleEditing: PropTypes.bool.isRequired,
  company: PropTypes.shape({
    address: PropTypes.string,
    zip: PropTypes.string,
    city: PropTypes.string,
    phone: PropTypes.string,
    mail: PropTypes.string,
    detail: PropTypes.string,
  }).isRequired,
};
