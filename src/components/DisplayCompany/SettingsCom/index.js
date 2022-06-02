import PropTypes from 'prop-types';

// import style
import './style.scss';

export default function SettingsCom({ company }) {
  return (
    <div className="display_settings-com">
      <div className="display_settings-com__desc">
        {company.communication}
      </div>
    </div>

  );
}

SettingsCom.propTypes = {
  company: PropTypes.shape({
    lastUpdate: PropTypes.string,
    communication: PropTypes.string,
  }).isRequired,
};
