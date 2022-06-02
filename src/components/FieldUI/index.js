// Import :
import PropTypes from 'prop-types';

// Import local :
import './style.scss';

const FieldUI = ({
  value,
  type,
  name,
  placeholder,
  className,
  onChange,
}) => {
  // const handleChange = (e) => {
  //   onChange(e.target.value, name);
  // };

  const inputId = `field-${name}`;

  return (
    <>
      <input
        // State
        value={value}
        onChange={onChange}
        // onChange={handleChange}
        // basic Information
        placeholder={placeholder}
        id={inputId}
        name={name}
        type={type}
        // className={`field-input ${className}`}
        className={`${className} field-input`}
      />
      <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label>
    </>
    // </div>
  );
};

// Prop-types :
FieldUI.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// Prop-Types par défaut :
FieldUI.defaultProps = {
  value: '',
  className: '',
  type: 'text',
};

export default FieldUI;
