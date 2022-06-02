// Imports
import { useDispatch, useSelector } from 'react-redux';
import { actionSetInput } from '../../actions/appLvl';

// Components

const AppTextarea = (props) => {
  const dispatch = useDispatch();
  const { nameSpace, name } = props;
  const allInputs = useSelector((state) => state.input[nameSpace]);
  let inputValue;
  if (allInputs) inputValue = allInputs[name];

  /* we set properties that textarea can use */
  const usableProps = { ...props };
  delete usableProps.nameSpace;

  const handleSetValue = (e) => {
    dispatch(actionSetInput(nameSpace, name, e.target.value));
  };

  return (
    <textarea {...usableProps} onChange={handleSetValue} value={inputValue} />
  );
};

export default AppTextarea;
