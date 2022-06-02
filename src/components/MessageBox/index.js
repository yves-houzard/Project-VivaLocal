// Imports
import PropTypes from 'prop-types';

// Components

// Styling
import './style.scss';

const MessageBox = ({
  children,
  className,
  bgColor,
  color,
}) => {
  const style = {
    bgColor,
    color,
  };
  return (
    <div className={`message-box__default ${className}`} style={style}>
    <i className="fas fa-info-circle" />
      {children}
    </div>
  );
};

MessageBox.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
};

MessageBox.defaultProps = {
  className: '',
  bgColor: '',
  color: '',
};

export default MessageBox;
