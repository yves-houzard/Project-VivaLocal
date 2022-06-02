import PropTypes from 'prop-types';
// import module
import { useDispatch } from 'react-redux';
import { actionsToggleEditingCom } from '../../../actions/toggle';
// import component
import EditingCom from './EditingCom';

// import style
import './style.scss';

export default function SettingsCom({ toggleEditing, company }) {
  const disptach = useDispatch();
  // const { lastUpdate, communication } = useSelector((state) => state.company);

  // Functions Handle
  const handleClickEdit = () => {
    disptach(actionsToggleEditingCom(toggleEditing));
  };

  return toggleEditing ? (
    <EditingCom
      toggleEditing={toggleEditing}
    />
  ) : (
    <div className="settings-com">
      <button type="button" onClick={handleClickEdit} className="settings-com__edit">
        <i className="fas fa-edit" />
      </button>
      <div className="settings-com__desc">
        {company.communication}
      </div>
    </div>

  );
}

SettingsCom.propTypes = {
  toggleEditing: PropTypes.bool.isRequired,
  company: PropTypes.shape({
    lastUpdate: PropTypes.string,
    communication: PropTypes.string,
  }).isRequired,
};
