// Imports
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import AppSpinner from './AppSpinner';

// Styling
import './style.scss';

// actions
import { actionUploadPic } from '../../actions/appLvl';

const UpPhoto = ({ productId, spinnerColor, className }) => {
  const dispatch = useDispatch();
  /* this selector fetches the right key in loading state */
  const spinnerVal = useSelector((state) => (
    productId ? state.loading[productId] : state.loading.main));
  const inputRef = useRef();

  const handleImport = (e) => {
    console.log('EVENT', e);
    if (e.target.files.length !== 0) dispatch(actionUploadPic(e.target.files[0], productId));
  };

  const handleOpenDialog = () => {
    /* simulate click on the file input button */
    inputRef.current.click();
  };

  return (
    <>
      <input
        className="upload-widget"
        type="file"
        onChange={handleImport}
        accept="image/png,image/jpg,image/jpeg"
        style={{ display: 'none' }}
        ref={inputRef}
      />
      <button className={`upload-widget__button ${className}`} type="button" onClick={handleOpenDialog} disabled={spinnerVal}>
        {
          spinnerVal
            ? <AppSpinner color={spinnerColor} />
            : <i className="fas fa-camera" />
        }

      </button>

    </>
  );
};

UpPhoto.propTypes = {
  productId: PropTypes.number,
  spinnerColor: PropTypes.string,
  className: PropTypes.string,
};

UpPhoto.defaultProps = {
  productId: 0,
  spinnerColor: 'black',
  className: '',
};

export default UpPhoto;
