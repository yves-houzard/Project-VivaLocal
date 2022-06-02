import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Marker, Popup, useMap } from 'react-leaflet';
import { actionLocate, actionSearchSuccess } from '../../../actions/search';

const UserMarker = () => {
  const dispatch = useDispatch();
  const { coordinates } = useSelector((state) => state.search.origin);
  const { canLocate } = useSelector((state) => state.search);
  // console.log('COORDINATES', coordinates);
  // const position = new L.LatLng(origin.coordinates.lat, origin.coordinates.lng);
  // const [location,/*  */ setLocation] = useState(null);
  // const [bbox, setBbox] = useState([]);

  const map = useMap();

  useEffect(() => {
    const handleFound = (e) => {
      // we store user coordinates (origin) in state
      dispatch(actionSearchSuccess(e.latlng));
      // console.log('Donnée GPS localisation : ', e.latlng);
      /* then we stop listening to "locate" event */
      dispatch(actionLocate(false));
      map.stopLocate();
      // const radius = e.accuracy;
      // const circle = L.circle(e.latlng, radius);
      // circle.addTo(map);
    };
    /* if canLocate becomes TRUE, we locate user,
    with an event handler that will update state with found coordinates */
    if (canLocate) map.locate().on('locationfound', handleFound);
  }, [canLocate]);

  // useEffect(() => {
  //   map.flyTo(coordinates, 6, { animate: true, duration: 0.2 });
  // }, []);

  useEffect(() => {
    map.flyTo(coordinates, 13, { animate: true, duration: 0.2 });
  }, [coordinates]);

  // if (origin === null) {
  //   console.log("einrswqns");
  //   return null;
  // }

  return (
    <Marker position={coordinates}>
      <Popup>
        Vous êtes ici.
      </Popup>
    </Marker>
  );
};

export default UserMarker;
