// Imports
import L from 'leaflet';
import PropTypes from 'prop-types';
import { Marker, Popup } from 'react-leaflet';
// import { useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';

// Components

// Styling
import './style.scss';

/*
TODO change coordinates format (LatLng)
 */
const ResultMarker = ({
  coordinates, route, name, mail, address, zip, city, phone, detail,
}) => {
  // const dispatch = useDispatch();
  const position = new L.LatLng(coordinates.lat, coordinates.lng);
  // console.log('coordinates : ', coordinates);
  const handleNameClick = (e) => {
    //   dispatch(actionGoToProPage());
  };
  // pour la position du Marker format : [1.5645, 54.1654]

  return (
    <Marker position={position}>
      <Popup>
        <div className="result-card" onClick={handleNameClick}>
          <NavLink
            className="card__link"
            to={route}
          >
            <h3 className="result-card__title">{name}</h3>
            <div>
              <ul>
                <li>
                  {address}
                </li>
                <li>
                  {zip}
                </li>
                <li>
                  {city}
                </li>
                <li>
                  {mail}
                </li>
                <li>
                  {phone}
                </li>
                <li>
                  {detail}
                </li>
              </ul>
            </div>
          </NavLink>
        </div>
      </Popup>
    </Marker>
  );
};

ResultMarker.propTypes = {
  coordinates: PropTypes.object.isRequired,
  route: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  detail: PropTypes.string,
};

ResultMarker.defaultProps = {
  detail: '',
};

export default ResultMarker;
