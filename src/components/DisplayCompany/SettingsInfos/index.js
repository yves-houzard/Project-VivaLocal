import PropTypes from 'prop-types';

// import style
import './style.scss';

export default function SettingsInfos({ company }) {
  return (
    <div className="display_settings-infos">
      <div className="display_settings-infos__content">

        <div>
          <div className="display_settings-infos__content-company">
            Adresse: <p>{company.address}</p>
          </div>
          <div className="display_settings-infos__content-company">
            Code Postal: <p>{company.zip}</p>
          </div>
          <div className="display_settings-infos__content-company">
            Ville: <p>{company.city}</p>
          </div>
        </div>
        <div>
          <div className="display_settings-infos__content-company">
            Téléphone: <p>{company.phone}</p>
          </div>
          <div className="display_settings-infos__content-company">
            Email: <p>{company.mail}</p>
          </div>
          <div className="display_settings-infos__content-company">
            Description: <p>{company.detail}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

SettingsInfos.propTypes = {
  company: PropTypes.shape({
    address: PropTypes.string,
    zip: PropTypes.string,
    city: PropTypes.string,
    phone: PropTypes.string,
    mail: PropTypes.string,
    detail: PropTypes.string,
  }).isRequired,
};
