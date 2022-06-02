// Imports
import PropTypes from 'prop-types';

// Components

// Styling
import './style.scss';

const AppSpinner = ({ color }) => (
  <div className="AppSpinner" style={{ borderColor: color }} />
);

AppSpinner.propTypes = {
  color: PropTypes.string,
};

AppSpinner.defaultProps = {
  color: '',
};

export default AppSpinner;
