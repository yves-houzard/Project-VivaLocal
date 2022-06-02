// import modules
import { useSelector } from 'react-redux';
import {
  MapContainer,
  TileLayer,
  // Marker,
  // Popup,
  ScaleControl,
} from 'react-leaflet';

// components
import UserMarker from './UserMarker';
import ResultMarker from './ResultMarker';
// import SearchMarker from './SearchMarker';

// import style
import './style.scss';

const MapComponent = () => {
  const { origin, results } = useSelector((state) => state.search);
  // console.log('PRO results : ', results);
  const center = [origin.coordinates.lat, origin.coordinates.lng];
  // const center = [origin.coordinates.lat, origin.coordinates.lng];
  // console.log('center : ', center);

  return (
    <MapContainer
      className="leaflet-container"
      center={center}
      zoom={`${origin.zoom}`}
      scrollWheelZoom
    >
      <ScaleControl />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <UserMarker />
      {
        results.map((el) => (
          <ResultMarker
            {...el}
            key={el.id}
            route={`/pro/${el.id}`}
          />
        ))
      }
      {/* <SearchMarker /> */}
    </MapContainer>
  );
};

export default MapComponent;
