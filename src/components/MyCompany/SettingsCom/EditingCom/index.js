import PropTypes from 'prop-types';
// import module
import { useDispatch } from 'react-redux';

// import Actions
import { actionsToggleEditingCom } from '../../../../actions/toggle';
import { actionsEditingSubmit } from '../../../../actions/company';
// impport component
import ButtonUI from '../../../ButtonUI';
// style
import './style.scss';
import AppTextarea from '../../../AppTextarea';

export default function EditingCom({
  toggleEditing,
}) {
  const dispatch = useDispatch();
  // functions handle
  const handleClickClose = () => {
    dispatch(actionsToggleEditingCom(toggleEditing));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionsEditingSubmit());
    dispatch(actionsToggleEditingCom(toggleEditing));
  };
  return (
    <div className="settings-com settings-com--open">
      <button type="button" onClick={handleClickClose} className="settings-com__close">
        <i className="fas fa-times" />
      </button>
      <form className="settings-com__desc" onSubmit={handleSubmit}>
        <AppTextarea
          type="text"
          name="communication"
          placeholder="Votre texte ici"
          required
          className="settings-com__field"
          nameSpace="companyEditing"
          rows="7"

        />
        <ButtonUI
          type="submit"
          className="settings-com__btn"
        >Enregistrer
        </ButtonUI>
      </form>
    </div>
  );
}

EditingCom.propTypes = {
  toggleEditing: PropTypes.bool.isRequired,
};
