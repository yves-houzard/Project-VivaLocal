// Imports
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Field from '../../FieldUI';

// actions
import { actionSetInput } from '../../../actions/appLvl';

const AuthentInput = (props) => {
  const { name } = props;

  const dispatch = useDispatch();

  /* we get value from state where field === name of AuthentInput instance (hence DOM element) */
  const value = useSelector((state) => state.input[name]);

  /* on input value change, we update state */
  const handleChange = (e) => {
    // console.log(name, e.target.value);
    dispatch(actionSetInput(name, e.target.value));
  };

  return (
    <Field
      {...props} // we pass all props defined in AuthentInput declaration
      name={name}
      onChange={handleChange}
      value={value}
    />
  );
};

AuthentInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AuthentInput;
