import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

// Import local :
import './style.scss';

import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { actionDelFavorites } from '../../actions/user';

import 'react-toastify/dist/ReactToastify.css';

const Card = (props) => {
  const {
    // eslint-disable-next-line camelcase
    favorite_id,
    name,
    address,
    zip,
    city,
    phone,
    mail,
    detail,
    route,
    image,
  } = props;

  const dispatch = useDispatch();

  const handleFav = () => {
    dispatch(actionDelFavorites(favorite_id));
    return toast.success('Favoris supprimé !', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  return (
    <div className="card">
      <NavLink
        className="card__link"
        to={route}
      >
        <div className="card__avatar">
          {
              image && image !== 'default' && <img src={image} alt={name} />
          }
        </div>
        <div className="card__informations">
          <table>
            <thead>
              <tr>
                <td colSpan="2" className="card__title">
                  {name}
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Adresse </strong>
                </td>
                <td>
                  {address}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>CP </strong>
                </td>
                <td>
                  {zip}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Ville </strong>
                </td>
                <td>
                  {city}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Tél </strong>
                </td>
                <td>
                  {phone}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Email </strong>
                </td>
                <td>
                  {mail}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Détail </strong>
                </td>
                <td>
                  {detail}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </NavLink>
      <div className="card__favorites" onClick={handleFav}>
        <div className="card__favorites__img" />
      </div>
    </div>
  );
};

Card.propTypes = {
  favorite_id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  image: PropTypes.string,
};

Card.defaultProps = {
  image: 'src/assets/images/itemCard.jpg',
};

export default Card;
