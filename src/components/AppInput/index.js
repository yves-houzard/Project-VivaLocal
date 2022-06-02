// Imports
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// Components
import FieldUI from '../FieldUI';

// actions
import { actionSetInput } from '../../actions/appLvl';

const AppInput = (props) => {
  const { name } = props;
  const { nameSpace } = props;
  // console.log(name);
  const dispatch = useDispatch();
  /* we get value from state where state property name is === name of AppInput
  instance (hence DOM element)
  We use namespaces in state in order to sort inputs by forms, for example.
  We then can use data easily with spread operator
   */
  /* 1) we get all inputs in namespace */
  const allInputs = useSelector((state) => state.input[nameSpace]);
  /* 2) if allInputs is defined, we get the value we want for the current instance of AppInput */
  let value;
  if (allInputs) value = allInputs[name];
  // console.log('value', value);
  /* on input value change, we update state */
  const handleChange = (e) => {
    dispatch(actionSetInput(nameSpace, name, e.target.value));
  };

  return (
    <FieldUI
      {...props} // we pass all props defined in AppInput declaration
      name={`${nameSpace}-${name}`} // for unique id in FieldUI
      onChange={handleChange}
      value={value}
    />
  );
};

AppInput.propTypes = {
  name: PropTypes.string.isRequired,
  nameSpace: PropTypes.string,
};

AppInput.defaultProps = {
  nameSpace: '',
};

export default AppInput;
