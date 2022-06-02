// Imports
import PropTypes from 'prop-types';

// Components

// Styling
import '../style.scss';

// default image

const StaticPhoto = ({
  src, alt, children, onLoad
}) => (
  // const StaticPhoto = ({ src, alt, children }) => (
  <div className="itemcard__image__box">
    {
      src && src !== 'default' && <img className="itemcard__image" src={src} alt={alt} onLoad={onLoad} />
    }
    {/* <img className="itemcard__image" src={src} alt={alt} /> */}
    {children}
  </div>
);

StaticPhoto.propTypes = {
  // onLoad: PropTypes.func,
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  children: PropTypes.object,
};

StaticPhoto.defaultProps = {
  // onLoad: null,
  src: null,
  children: <></>,
};

export default StaticPhoto;
