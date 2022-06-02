// Imports
import PropTypes from 'prop-types';

// Components

// Styling
import './style.scss';

const ButtonUI = (props) => {
  const {
    type,
    className,
    children,
    onClick,
  } = props;
  return (
    <button
      {...props}
      type={type}
      className={`button-ui__base ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

ButtonUI.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,

  // We SHOULD NOT SET PROP TYPES HERE
  // BECAUSE submit buttons don’t need onClick
  onClick: PropTypes.func,

};
ButtonUI.defaultProps = {
  className: '',
  onClick: () => { },
};
export default ButtonUI;
